import * as React from 'react';
import { Button, Text, View, SectionList, StyleSheet, Scroll } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StateProvider } from './state.js';
import { useStateValue } from './state.js';
import * as scale from 'd3-scale';

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

import { BarChart, Grid, PieChart, LineChart, XAxis } from 'react-native-svg-charts';

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
			<View style={[styles.box]}>
				<BarChart
					style={{ flex: 1, width: '100%' }}
					data={data}
					horizontal={true}
					svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
					contentInset={{ top: 10, bottom: 10 }}
					spacing={0.2}
					gridMin={0}
				>
					<Grid direction={Grid.Direction.VERTICAL} />
				</BarChart>
			</View>
			<View style={[styles.box]}>
				<PieChart style={{ flex: 1, width: '100%' }} outerRadius={'70%'} innerRadius={10} data={pieData} />
			</View>
			<View style={[styles.box]}>
				<LineChart
					style={{ flex: 1, width: '100%' }}
					data={lineData}
					contentInset={{ top: 20, bottom: 20 }}
					svg={{
						strokeWidth: 2,
						stroke: 'url(#gradient)'
					}}
				>
					<Grid />
					<Gradient />
				</LineChart>
			</View>
			<View style={[styles.box]}>
				<BarChart style={{ flex: 1 }} data={data} gridMin={0} svg={{ fill: 'rgb(134, 65, 244)' }} />
				<XAxis
					style={{ marginTop: 10 }}
					data={data}
					scale={scale.scaleBand}
					formatLabel={(value, index) => index}
					labelStyle={{ color: 'black' }}
				/>
			</View>
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
