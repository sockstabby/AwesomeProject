import * as React from 'react';
import { View, StyleSheet,Text ,TouchableOpacity} from 'react-native';
import { Grid, LineChart } from 'react-native-svg-charts';
import * as scale from 'd3-scale';
import { useStateValue } from '../state.js';

const styles = StyleSheet.create({
	box: {
		width: '48%',
		height: 200,
		padding: 15,
		borderColor: 'black',
		borderWidth: 2,
		margin: 'auto'
	}
});

// const [dispatch] = useStateValue();

const PriceWidget = (props) => {
	return (
		<View style={[styles.box]}>
        {/* <TouchableOpacity onPress={() => {
					dispatch({ type: 'changeTheme', value: { primary: 'blue' } });
				}}> */}
        <Text style={{ color: 'black' , fontSize: 20 , fontWeight: 'bold', alignSelf:'center' , paddingTop: '5%'}}>
          {props.text}
        </Text>
        <Text style={{ color: props.color , fontSize: 30 , fontWeight: 'bold', alignSelf:'center' , paddingTop: '25%'}}>
          {props.price}
        </Text>
        <Text style={{ color:'black' , fontSize: 12 , fontWeight: 'bold', alignSelf:'flex-end' , paddingTop: '30%'}}>
          {props.time}
        </Text>
        {/* </TouchableOpacity> */}
		</View>

	);
};

export default PriceWidget;
