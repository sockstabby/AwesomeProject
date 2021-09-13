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
	
		return (
			<View
			style={{
				alignSelf: 'center',
				backgroundColor: 'aliceblue',
				height: '100%',
			    width: '100%',
				padding: 15,
				margin:'auto',
				flexWrap: 'wrap',
				flexDirection: 'row'
			}}
			>
			<PriceWidget color='red' text='Western Hub - RTLMP' price='35.84'/>
			<PriceWidget color='green' text='Western Hub - DALMP' price='43.63'/>
		    <PieChartWidget />
			<LineChartWidget />
			<BarChartWidget />
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
      		<Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'ios-information-circle'  ;
            } else if (route.name === 'Settings') {
              iconName =  'list';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
		</StateProvider>
	);
}
