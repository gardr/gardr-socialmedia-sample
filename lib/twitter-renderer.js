var gardrParams = gardr.params.data;

var followLink = document.createElement('a');
followLink.href = gardrParams.href;
followLink.className = 'twitter-follow-button';
followLink.setAttribute('data-show-count', gardrParams.showCount);
followLink.setAttribute('data-lang', gardrParams.lang);
document.body.appendChild(followLink);

var js, fjs = document.getElementsByTagName('script')[0],
    p = /^http:/.test(document.location) ? 'http' : 'https';
if (!document.getElementById('twitter-wjs')) {
    js = document.createElement('script');
    js.id = 'twitter-wjs';
    js.src = p + '://platform.twitter.com/widgets.js';
    fjs.parentNode.insertBefore(js, fjs);
}
