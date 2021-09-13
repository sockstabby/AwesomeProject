import * as React from 'react';
import LineChartWidget from './widgets/lineChart.js';
import PieChartWidget from './widgets/pieChart.js';
import BarChartWidget from './widgets/barChart.js';

export const WIDGETS = {
	BAR: 1,
	PIE: 2,
	LINE: 3
};

const widgets = {
	[WIDGETS.BAR]: <BarChartWidget />,
	[WIDGETS.PIE]: <PieChartWidget />,
	[WIDGETS.LINE]: <LineChartWidget />
};

export const createWidget = id => widgets[id];
