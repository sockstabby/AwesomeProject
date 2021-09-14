import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { BarChart, XAxis } from 'react-native-svg-charts';
import * as scale from 'd3-scale';

const styles = StyleSheet.create({
	box: {
		width: '48%',
		height: 170,
		padding: 15,
		borderColor: 'black',
		borderWidth: 2,
		margin: 1
	}
});

const BarChartWidget = () => {
	const data = [50, 10, 40, 95, 85];

	return (
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
	);
};

export default BarChartWidget;
