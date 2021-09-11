import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Svg, {
	Circle,
	Ellipse,
	G,
	TSpan,
	TextPath,
	Path,
	Polygon,
	Polyline,
	Line,
	Rect,
	Use,
	Image,
	Symbol,
	Defs,
	LinearGradient,
	RadialGradient,
	Stop,
	ClipPath,
	Pattern,
	Mask
} from 'react-native-svg';

function DetailsScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Details!</Text>
		</View>
	);
}

function HomeScreen({ navigation }) {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Home screen</Text>
			<Svg height="50%" width="50%" viewBox="0 0 100 100">
				<Circle cx="50" cy="50" r="45" stroke="blue" strokeWidth="2.5" fill="green" />
				<Rect x="15" y="15" width="70" height="70" stroke="red" strokeWidth="2" fill="yellow" />
			</Svg>
			<Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
		</View>
	);
}

function SettingsScreen({ navigation }) {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Settings screen</Text>
			<Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
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
	return (
		<NavigationContainer>
			<Tab.Navigator screenOptions={{ headerShown: false }}>
				<Tab.Screen name="Home" component={HomeStackScreen} />
				<Tab.Screen name="Settings" component={SettingsStackScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
