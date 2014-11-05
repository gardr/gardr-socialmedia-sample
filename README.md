# gardr-facebook-renderer

This project contains a module which renders Facebook SDK like button and like box inside a Gardr container. The IFrame can be served from a different domain.

[![Dependency Status](https://david-dm.org/gardr/gardr-facebook.png)](https://david-dm.org/gardr/gardr-facebook)
[![devDependency Status](https://david-dm.org/gardr/gardr-facebook/dev-status.png)](https://david-dm.org/gardr/gardr-facebook#info=devD)

[![NPM](https://nodei.co/npm/gardr-facebook.png?stars=true&downloads=true)](https://npmjs.org/package/gardr-facebook)

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

This opens up the URL [http://localhost:1338/](http://localhost:1338/).

# Contributing


