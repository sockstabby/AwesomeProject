import * as React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { Grid, LineChart } from 'react-native-svg-charts';
import * as scale from 'd3-scale';
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

const PriceWidget = () => {
	const priceData = 35.84;

	return (
		<View style={[styles.box]}>
			 <Text>{priceData} </Text>
		</View>
	);
};

export default PriceWidget;
;
