# gardr-socialmeida-sample

This project contains a module which renders different social media widgets inside a Garðr container. 
The sample runs the IFrame from a different origin, showing how data leackage can be prevented.

[![Dependency Status](https://david-dm.org/gardr/gardr-socialmeida-sample.png)](https://david-dm.org/gardr/gardr-socialmeida-sample)
[![devDependency Status](https://david-dm.org/gardr/gardr-socialmeida-sample/dev-status.png)](https://david-dm.org/gardr/gardr-socialmeida-sample#info=devD)

[![NPM](https://nodei.co/npm/gardr-socialmeida-sample.png?stars=true&downloads=true)](https://npmjs.org/package/gardr-socialmeida-sample)

# Using the module

	'use strict';
	var gardrHost = require('gardr-host');
	var params = require('query-params');
	document.addEventListener( 'DOMContentLoaded', function(){	

		// Required parameters by Facebook SDK
		var fbParams = params.encode({
			'fbAppId': '1375962765972285',
			'fbLocale': 'nb_NO',
			'fbType': type,
			'fbLink': 'https://www.facebook.com/finn.no'
		});
		var gardr = gardrHost({
			iframeUrl: 'http://127.0.0.1:1338/iframe.html?' + fbParams
		});

		gardr.queue('fb-container', {
			url : 'http://127.0.0.1:1338/renderBundle.js',
			height: '300px',
			container : 'fb-container'
		});

		gardr.render('fb-container');
	}, false );

#  Running the samples
All the sample code is located in the _samples_ folder.

	$ npm install && npm start

This opens up the URL [http://localhost:1338/](http://localhost:1338/). The samples all render their content from what is a different host [http://localhost:1339/iframe.html](http://localhost:1339/iframe.html), see [Same Origin Policy](https://en.wikipedia.org/wiki/Same-origin_policy), this prevents the IFrame content from retrieving data from the host document.


