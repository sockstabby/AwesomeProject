import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-svg-charts';

import Svg, { Defs, LinearGradient, Stop } from 'react-native-svg';

const styles = StyleSheet.create({
	box: {
		width: '48%',
		height: 200,
		padding: 15,
		borderColor: 'red',
		borderWidth: 1,
		margin: 1
	}
});

const PieChartWidget = () => {
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
		<View style={[styles.box]}>
			<PieChart style={{ flex: 1, width: '100%' }} outerRadius={'70%'} innerRadius={10} data={pieData} />
		</View>
	);
};

export default PieChartWidget;
