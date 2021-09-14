import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Grid, LineChart } from 'react-native-svg-charts';
import * as scale from 'd3-scale';
import Svg, { Defs, LinearGradient, Stop } from 'react-native-svg';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 22
	},
	box: {
		width: '48%',
		height: 170,
		padding: 15,
		borderColor: 'black',
		borderWidth: 2,
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

const Gradient = () => (
	<Defs key={'gradient'}>
		<LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
			<Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'} />
			<Stop offset={'100%'} stopColor={'rgb(66, 194, 244)'} />
		</LinearGradient>
	</Defs>
);

const LineChartWidget = () => {
	const lineData = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];

	return (
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
	);
};

export default LineChartWidget;
