var params = require('query-params');
var qps = document.location.search.substr(1,document.location.search.length);
var params = params.decode(qps);

var followLink = document.createElement('a');
followLink.href = params.href;
followLink.className = 'twitter-follow-button';
followLink.setAttribute('data-show-count', params.showCount);
followLink.setAttribute('data-lang', params.lang);
document.body.appendChild(followLink);

var js, fjs = document.getElementsByTagName('script')[0],
    p = /^http:/.test(document.location) ? 'http' : 'https';
if (!document.getElementById('twitter-wjs')) {
    js = document.createElement('script');
    js.id = 'twitter-wjs';
    js.src = p + '://platform.twitter.com/widgets.js';
    fjs.parentNode.insertBefore(js, fjs);
}
