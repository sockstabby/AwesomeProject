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

const widgets = {
	[WIDGETS.BAR]: <BarChartWidget />,
	[WIDGETS.PIE]: <PieChartWidget />,
	[WIDGETS.LINE]: <LineChartWidget />,
	[WIDGETS.PRICE]: <PriceWidget color="red" text="Western Hub - RTLMP" price="35.84" />
};

export const createWidget = id => widgets[id];
