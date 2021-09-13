import * as React from 'react';
import LineChartWidget from './widgets/lineChart.js';
import PieChartWidget from './widgets/pieChart.js';
import BarChartWidget from './widgets/barChart.js';
import PriceWidget from './widgets/priceWidget.js';
import AreaChartWidget from './widgets/areaChart.js';

export const WIDGETS = {
	PRICE: 1,
	PRICE2: 2,
	BAR: 3,
	PIE: 4,
	LINE: 5,
	AREA: 6
};

const constructWidget = (id, props = {}) => {
	switch (id) {
		case WIDGETS.BAR:
			return <BarChartWidget key={props.key} />;
		case WIDGETS.PIE:
			return <PieChartWidget key={props.key} />;
		case WIDGETS.LINE:
			return <LineChartWidget key={props.key} />;
		case WIDGETS.PRICE:
			return <PriceWidget color={props.color} text={props.text} price={props.price} />;
		case WIDGETS.AREA:
			return <AreaChartWidget />;
	}
	return null;
};

export const createWidget = (id, index, props = {}) => {
	const newProps = { ...props, key: '' + index };
	return constructWidget(id, newProps);
};
