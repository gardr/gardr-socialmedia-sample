'use strict';
var gardrHost = require('gardr-host');
var params = require('query-params');

document.addEventListener( 'DOMContentLoaded', function(){

	var input = params.decode(document.location.search.substr(1, document.location.search.length));
	var type = 'like-box';

	// The section below is just something for this sample
	var iframeHeight = '180px';
	if (input.type === 'button'){
		type = 'like-button';
		iframeHeight = '20px';
	} else if (input.type === 'twitter') {
		type = 'twitter';
		iframeHeight = '20px';
	}
	
	if (type === 'twitter') {
		var twitterParams = params.encode({
			'href': 'http://twitter.com/gardr',
			'lang': 'en',
			'showCount': false
		});
		var gardr2 = gardrHost({
			iframeUrl: 'http://127.0.0.1:1339/iframe.html?' + twitterParams
		})
		gardr2.queue('twitter-content', {
			url : 'http://127.0.0.1:1339/twitterBundle.js',
			height: iframeHeight,
			width: '100%',
			container : 'safe-container'
		});
		gardr2.render('twitter-content');
	} else {
		var fbParams = params.encode({
			'fbAppId': '1375962765972285',
			'fbLocale': 'nb_NO',
			'fbType': type,
			'fbLink': 'https://www.facebook.com/finn.no'
		});
		var gardr = gardrHost({
			iframeUrl: 'http://127.0.0.1:1339/iframe.html?' + fbParams
		});

		gardr.queue('fb-content', {
			url : 'http://127.0.0.1:1339/fbBundle.js',
			height: iframeHeight,
			width: '100%',
			container : 'safe-container'
		});

		gardr.render('fb-content');
	}
}, false );