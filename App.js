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
import { createWidget, WIDGETS } from './Factory.js';

function HomeScreen({ navigation }) {
	const [{ theme, widgets }, dispatch] = useStateValue();
	const activeWidgets = widgets.filter(i => i.enabled);
	const widgys = activeWidgets.map(i => createWidget(i.type));

	return (
		<View
			style={{
				alignSelf: 'center',
				backgroundColor: 'aliceblue',
				height: '100%',
				width: '100%',
				padding: 15,
				margin: 'auto',
				flexWrap: 'wrap',
				flexDirection: 'row'
			}}
			children={widgys}
		></View>
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

const Tab = createBottomTabNavigator();

export default function App() {
	const initialState = {
		theme: { primary: 'yellow' },
		widgets: [
			{ type: WIDGETS.PRICE, enabled: true },
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
								iconName = 'list';
							}

							return <Ionicons name={iconName} size={size} color={color} />;
						},
						tabBarActiveTintColor: 'tomato',
						tabBarInactiveTintColor: 'gray'
					})}
				>
					<Tab.Screen name="Home" component={HomeScreen} />
					<Tab.Screen name="Settings" component={SettingsScreen} />
				</Tab.Navigator>
			</NavigationContainer>
		</StateProvider>
	);
}
