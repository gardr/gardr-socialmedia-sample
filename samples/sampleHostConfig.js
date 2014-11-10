'use strict';
var gardrHost = require('gardr-host');

document.addEventListener( 'DOMContentLoaded', function(){
	var manager = gardrHost({
		iframeUrl: 'http://127.0.0.1:1339/iframe.html'
	});
	// configure new placements for all social media widets
	manager.config('twitter-content', {
		width: '100%',
		height: '20px',
		data: {
			'href': 'http://twitter.com/gardr',
			'lang': 'en',
			'showCount': 'false'			
		}
	});
	manager.config('facebook', {
		height: '20px',
		width: '100%',
		data: {
			'fbAppId': '1375962765972285',
			'fbLocale': 'nb_NO',
			'fbType': 'like-button',
			'fbLink': 'https://www.facebook.com/finn.no'
		}
	});
	manager.config('facebook-box', {
		height: '180px',
		width: '100%',
		data: {
			'fbAppId': '1375962765972285',
			'fbLocale': 'nb_NO',
			'fbType': 'like-box',
			'fbLink': 'https://www.facebook.com/finn.no'
		}
	});

	// queue all the configuret social media placements
	manager.queue('twitter-content', {
		url : 'http://127.0.0.1:1339/twitterBundle.js',
		container : 'twitter-container'
	});
	manager.queue('facebook', {
		url : 'http://127.0.0.1:1339/fbBundle.js',
		container : 'fb-container'
	});
	manager.queue('facebook-box', {
		url : 'http://127.0.0.1:1339/fbBundle.js',
		container : 'fb-box-container'
	});
	// Trigger renderings
	manager.renderAll();
}, false );