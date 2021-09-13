import * as React from 'react';
import LineChartWidget from './widgets/lineChart.js';
import PieChartWidget from './widgets/pieChart.js';
import BarChartWidget from './widgets/barChart.js';
import PriceWidget from './widgets/priceWidget.js';
import AreaChartWidget from './widgets/areaChart.js';

export const WIDGETS = {
	PRICE:1,
	PRICE2:2,
	BAR: 3,
	PIE: 4,
	LINE: 5,	
	AREA: 6
};

const widgets = {
	[WIDGETS.PRICE]: <PriceWidget color='red' text='Western Hub - RTLMP' price='35.84' time='11:55'/>,
	[WIDGETS.PRICE2]: <PriceWidget color='green' text='Western Hub - DALMP' price='43.63' time='11:55' />,
	[WIDGETS.BAR]: <BarChartWidget />,
	[WIDGETS.PIE]: <PieChartWidget />,
	[WIDGETS.LINE]: <LineChartWidget />,
	[WIDGETS.AREA]: <AreaChartWidget />
};

export const createWidget = id => widgets[id];
