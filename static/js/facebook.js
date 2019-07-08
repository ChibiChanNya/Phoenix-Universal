window.fbAsyncInit = function() {
  FB.init({
    appId            : '478115346000965',
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v3.2'
  });
};

// MESSENGER
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/es_MX/sdk/xfbml.customerchat.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


