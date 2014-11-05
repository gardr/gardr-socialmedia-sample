'use strict';
var gardrHost = require('gardr-host');
var params = require('query-params');

document.addEventListener( 'DOMContentLoaded', function(){

	var input = params.decode(document.location.search.substr(1, document.location.search.length));
	var type = 'like-box';
	var iframeHeight = '180px';
	if (input.type === 'button'){
		type = 'like-button';
		iframeHeight = '20px';
	}
	
	var fbParams = params.encode({
		'fbAppId': '1375962765972285',
		'fbLocale': 'nb_NO',
		'fbType': type,
		'fbLink': 'https://www.facebook.com/finn.no'
	});
	var gardr = gardrHost({
		iframeUrl: 'http://127.0.0.1:1338/iframe.html?' + fbParams
	});

	gardr.queue('fb-content', {
		url : 'http://127.0.0.1:1338/renderBundle.js',
		height: iframeHeight,
		width: '100%',
		container : 'fb-container'
	});

	gardr.render('fb-content');
}, false );