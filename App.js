import * as React from 'react';
import { Button, Text, View, SectionList, StyleSheet, Scroll } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StateProvider } from './state.js';
import { useStateValue } from './state.js';
import LineChartWidget from './widgets/lineChart.js';
import PieChartWidget from './widgets/pieChart.js';
import BarChartWidget from './widgets/barChart.js';
import Svg, { Circle, Rect } from 'react-native-svg';
import { BarChart, Grid } from 'react-native-svg-charts';

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

function DetailsScreen() {
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
		</View>
	);
}

function HomeScreen({ navigation }) {
	const [{ theme }, dispatch] = useStateValue();
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Home screen</Text>
			<Svg height="50%" width="50%" viewBox="0 0 100 100">
				<Circle cx="50" cy="50" r="45" stroke="blue" strokeWidth="2.5" fill="green" />
				<Rect x="15" y="15" width="70" height="70" stroke="red" strokeWidth="2" fill={theme.primary} />
			</Svg>
			<Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
		</View>
	);
}

function SettingsScreen({ navigation }) {
	const [{ theme }, dispatch] = useStateValue();
	console.log('theme', theme);
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<SectionList
				sections={[
					{ title: 'D', data: ['Devin', 'Dan', 'Dominic'] },
					{ title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] }
				]}
				renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
				renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
				keyExtractor={(item, index) => index}
			/>
			<Button
				title="Go to Details"
				onPress={() => {
					dispatch({ type: 'changeTheme', value: { primary: 'blue' } });
					navigation.navigate('Details');
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
			<HomeStack.Screen name="Details" component={DetailsScreen} />
		</HomeStack.Navigator>
	);
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
	return (
		<SettingsStack.Navigator>
			<SettingsStack.Screen name="Settings" component={SettingsScreen} />
			<SettingsStack.Screen name="Details" component={DetailsScreen} />
		</SettingsStack.Navigator>
	);
}

const Tab = createBottomTabNavigator();

export default function App() {
	const initialState = {
		theme: { primary: 'yellow' }
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
				<Tab.Navigator screenOptions={{ headerShown: false }}>
					<Tab.Screen name="Home" component={HomeStackScreen} />
					<Tab.Screen name="Settings" component={SettingsStackScreen} />
				</Tab.Navigator>
			</NavigationContainer>
		</StateProvider>
	);
}
