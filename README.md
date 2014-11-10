# gardr-socialmeida-sample

This project contains a just some samples on how to configure different social media widgets using Garðr. 
The sample runs the IFrame from a different origin, showing how data leackage can be prevented.

[![Dependency Status](https://david-dm.org/gardr/gardr-socialmedia-sample.png)](https://david-dm.org/gardr/gardr-socialmedia-sample)
[![devDependency Status](https://david-dm.org/gardr/gardr-socialmedia-sample/dev-status.png)](https://david-dm.org/gardr/gardr-socialmedia-sample#info=devD)

[![NPM](https://nodei.co/npm/gardr-socialmedia-sample.png?stars=true&downloads=true)](https://npmjs.org/package/gardr-socialmedia-sample)

# Simple configuration

	'use strict';
	var manager  = require('gardr-host');
	document.addEventListener( 'DOMContentLoaded', function(){	
		manager.config('twitter-content', {
			width: '100%',
			height: '20px',
			data: {
				'href': 'http://twitter.com/gardr',
				'lang': 'en',
				'showCount': 'false'			
			}
		});
		manager.queue('twitter-content', {
			url : 'http://127.0.0.1:1339/twitterBundle.js',
			container : 'twitter-container'
		});
		manager.renderAll();
	}, false );

You can use the same configuration with an existing gardr configuraiton. All you need to do is to configure new placements like in the sample above.

#  Running the samples
All the sample code is located in the _samples_ folder.

	$ npm install && npm start

This opens up the URL [http://localhost:1338/](http://localhost:1338/). The samples all render their content from what is a different host [http://localhost:1339/iframe.html](http://localhost:1339/iframe.html), see [Same Origin Policy](https://en.wikipedia.org/wiki/Same-origin_policy), this prevents the IFrame content from retrieving data from the host document.


