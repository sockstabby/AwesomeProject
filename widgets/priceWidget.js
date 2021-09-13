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
		margin: 'auto'
	}
});

const PriceWidget = (props) => {
	return (
		<View style={[styles.box]}>
        <Text style={{ color: 'black' , fontSize: 25 , fontWeight: 'bold', alignSelf:'center' , paddingTop: '5px'}}>
          {props.text}
        </Text>
        <Text style={{ color: props.color , fontSize: 50 , fontWeight: 'bold', alignSelf:'center' , paddingTop: '25px'}}>
          {props.price}
        </Text>
		</View>

	);
};

export default PriceWidget;
