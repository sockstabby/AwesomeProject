import * as React from 'react';
import LineChartWidget from './widgets/lineChart.js';
import PieChartWidget from './widgets/pieChart.js';
import BarChartWidget from './widgets/barChart.js';
import PriceWidget from './widgets/priceWidget.js';

export const WIDGETS = {
	BAR: 1,
	PIE: 2,
	LINE: 3,
	PRICE: 4
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
	}
	return null;
};

const widgets = {
	[WIDGETS.BAR]: <BarChartWidget />,
	[WIDGETS.PIE]: <PieChartWidget />,
	[WIDGETS.LINE]: <LineChartWidget />,
	[WIDGETS.PRICE]: <PriceWidget color="red" text="Western Hub - RTLMP" price="35.84" />
};

export const createWidget = (id, index, props = {}) => {
	const newProps = { ...props, key: '' + index };
	return constructWidget(id, newProps);
};
