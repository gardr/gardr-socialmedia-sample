var params = require('query-params');
var qps = document.location.search.substr(1,document.location.search.length);
var fbParams = params.decode(qps);

var fbAppId = fbParams.fbAppId;
var fbLocale = fbParams.fbLocale;
var fbLink = fbParams.fbLink;
var fbType = fbParams.fbType;

var fbRoot = document.createElement('div');
fbRoot.id = 'fb-root';
document.body.appendChild(fbRoot);

window.fbAsyncInit = function() {
    FB.init({
        appId      : fbAppId,
        status     : false,
        xfbml      : true
    });
};

var js, fjs = document.getElementsByTagName('script')[0];
if (document.getElementById('facebook-jssdk')) {return;}
js = document.createElement('script');
js.id = 'facebook-jssdk';
js.src = '//connect.facebook.net/' + fbLocale + '/all.js';
fjs.parentNode.insertBefore(js, fjs);


var likeButton = '<div class="fb-like" data-send="false" data-width="390" data-show-faces="false" data-font="arial"></div>';
var likeBox = '<div class="fb-like-box" data-href="https://www.facebook.com/finn.no"' +
	' data-width="292" data-height="180"' +
    ' data-colorscheme="light" data-show-faces="true" data-header="false"' +
    ' data-stream="false" data-show-border="true"></div>';

var fbContainer = document.createElement('div');
if (fbType === 'like-box') {
    fbContainer.innerHTML = likeBox;
} else if (fbType === 'like-button') {
    fbContainer.innerHTML = likeButton;
}
document.body.appendChild(fbContainer);
