import * as React from 'react';
import { Button, Text, View, SectionList, StyleSheet, ScrollView, Stack } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StateProvider } from './state.js';
import { useStateValue } from './state.js';
import LineChartWidget from './widgets/lineChart.js';
import PieChartWidget from './widgets/pieChart.js';
import BarChartWidget from './widgets/barChart.js';
import PriceWidget from './widgets/priceWidget.js';
import Svg, { Circle, Rect } from 'react-native-svg';
import { BarChart, Grid } from 'react-native-svg-charts';
import Ionicons from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 22
	},
	box: {
		width: '48%',
		height: 200,
		padding: 15,
		borderColor: 'red',
		borderWidth: 1,
		margin: 1
	},
	sectionHeader: {
		paddingTop: 2,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 2,
		fontSize: 14,
		fontWeight: 'bold',
		backgroundColor: 'rgba(247,247,247,1.0)'
	},
	item: {
		padding: 10,
		fontSize: 18,
		height: 44
	}
});

function HomeScreen({ navigation }) {
	const [{ theme }, dispatch] = useStateValue();
	const data = [50, 10, 40, 95, 85];
	const pieData = [
		{
			key: 1,
			value: 50,
			svg: { fill: '#600080' },
			arc: { outerRadius: '130%', cornerRadius: 10 }
		},
		{
			key: 2,
			value: 50,
			svg: { fill: '#9900cc' }
		},
		{
			key: 3,
			value: 40,
			svg: { fill: '#c61aff' }
		},
		{
			key: 4,
			value: 95,
			svg: { fill: '#d966ff' }
		},
		{
			key: 5,
			value: 35,
			svg: { fill: '#ecb3ff' }
		}
	];

	const lineData = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];

	const Gradient = () => (
		<Defs key={'gradient'}>
			<LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
				<Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'} />
				<Stop offset={'100%'} stopColor={'rgb(66, 194, 244)'} />
			</LinearGradient>
		</Defs>
	);

	return (
		<View
			style={{
				alignSelf: 'flex-start',
				backgroundColor: 'aliceblue',
				height: 'auto',
				width: '100%',
				padding: 15,
				flexWrap: 'wrap',
				flexDirection: 'row'
			}}
		>
			<PieChartWidget />
			<LineChartWidget />
			<BarChartWidget />
			<PriceWidget />
		</View>
	);
}

function SettingsScreen({ navigation }) {
	const [{ theme }, dispatch] = useStateValue();
	console.log('theme', theme);
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Button
				title="Theme"
				onPress={() => {
					dispatch({ type: 'changeTheme', value: { primary: 'blue' } });
				}}
			/>
		</View>
	);
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name="Home" component={HomeScreen} />
		</HomeStack.Navigator>
	);
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
	return (
		<SettingsStack.Navigator>
			<SettingsStack.Screen name="Settings" component={SettingsScreen} />
		</SettingsStack.Navigator>
	);
}

const Tab = createBottomTabNavigator();

export default function App() {
	const initialState = {
		theme: { primary: 'yellow' },
		widgets: [
			{ type: WIDGETS.BAR, enabled: true },
			{ type: WIDGETS.PIE, enabled: true },
			{ type: WIDGETS.LINE, enabled: true }
		]
	};

	const reducer = (state, action) => {
		console.log(action);
		switch (action.type) {
			case 'changeTheme':
				return {
					...state,
					theme: action.value
				};

			default:
				return state;
		}
	};
	return (
		<StateProvider initialState={initialState} reducer={reducer}>
			<NavigationContainer>
				<Tab.Navigator
					screenOptions={({ route }) => ({
						tabBarIcon: ({ color, size }) => {
							let iconName;

							if (route.name === 'Home') {
								iconName = 'ios-information-circle';
							} else if (route.name === 'Settings') {
								iconName = 'ios-list-box';
							}

							return <Ionicons name={iconName} size={size} color={color} />;
						},
						tabBarActiveTintColor: 'tomato',
						tabBarInactiveTintColor: 'gray'
					})}
				>
					<Tab.Screen name="Home" component={HomeStackScreen} />
					<Tab.Screen name="Settings" component={SettingsStackScreen} />
				</Tab.Navigator>
			</NavigationContainer>
		</StateProvider>
	);
}
