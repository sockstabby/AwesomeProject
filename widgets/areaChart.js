import React from 'react'
import { StackedAreaChart } from 'react-native-svg-charts'
import { View, StyleSheet } from 'react-native';
import * as shape from 'd3-shape'


const styles = StyleSheet.create({
	box: {
		width: '48%',
		height: 170,
		padding: 15,
		borderColor: 'black',
		borderWidth: 2,
		margin: 'auto'
	}
});

const AreaChartWidget = () => {
	const data = [ {
        month: new Date(2015, 0, 1),
        apples: 3840,
        bananas: 1920,
        cherries: 960,
        dates: 400,
    },
    {
        month: new Date(2015, 1, 1),
        apples: 1600,
        bananas: 1440,
        cherries: 960,
        dates: 400,
    },
    {
        month: new Date(2015, 2, 1),
        apples: 640,
        bananas: 960,
        cherries: 3640,
        dates: 400,
    },
    {
        month: new Date(2015, 3, 1),
        apples: 3320,
        bananas: 480,
        cherries: 640,
        dates: 400,
    }];

    const colors = ['#8800cc', '#aa00ff', '#cc66ff', '#eeccff'];
    const keys = ['apples', 'bananas', 'cherries', 'dates'];

	return (
		<View style={[styles.box]}>
			<StackedAreaChart  style={{ height: 170, paddingVertical: 10 }}
                data={data}
                keys={keys}
                colors={colors}
                curve={shape.curveNatural}
                showGrid={false}
                />
		</View>
	);
};

export default AreaChartWidget;