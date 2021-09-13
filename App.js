import * as React from 'react';
import { Button, Text, View, SectionList, StyleSheet, ScrollView, Stack } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StateProvider } from './state.js';
import { useStateValue } from './state.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createWidget, WIDGETS } from './Factory.js';
import Theme from './Settings/theme.js'

function HomeScreen({ navigation }) {
	const [{ theme, widgets }, dispatch] = useStateValue();
	const activeWidgets = widgets.filter(i => i.enabled);
	const widgys = activeWidgets.map((item, index) => createWidget(item.type, index, item.props));

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
			<Text>Dark Theme</Text>
			<Theme>
				onPress={() => {
					dispatch({ type: 'theme', value: { primary: 'blue' } });
				}}</Theme>
		</View>
	);
}

const Tab = createBottomTabNavigator();

export default function App() {
	const initialState = {
		theme: { primary: 'yellow' },
		widgets: [
			{
				type: WIDGETS.PRICE,
				enabled: true,
				props: { color: 'red', text: 'Western Hub - RTLMP', price: '35.84' , time:'11:55' }
			},
			{
				type: WIDGETS.PRICE,
				enabled: true,
				props: { color: 'green', text: 'Western Hub - DALMP', price: '76.84', time:'11:55'}
			},
			{ type: WIDGETS.BAR, enabled: true, props: {} },
			{ type: WIDGETS.PIE, enabled: true, props: {} },
			{ type: WIDGETS.LINE, enabled: true, props: {} },
			{ type: WIDGETS.AREA, enabled: true, props: {} }
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
								iconName = 'home';
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
