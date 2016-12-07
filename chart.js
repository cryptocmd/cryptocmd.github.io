var chart = new cryptowatch.Embed('poloniex', 'ethbtc', {
	timePeriod: '15m',
	// width: 650,
	customColorScheme: {
		bg:           "121b1b",
		text:         "b2b2b2",
		textStrong:   "e5e5e5",
		textWeak:     "7f7f7f",
		short:        "D62728",
		shortFill:    "D62728",
		long:         "2CA02C",
		longFill:     "2CA02C4D",
		cta:          "363D52",
		ctaHighlight: "414A67",
		alert:        "FFD506",
	}
});
chart.mount('#chart-container');
