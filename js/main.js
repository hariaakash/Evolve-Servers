function load(script) {
    document.write('<' + 'script src="' + script + '" type="text/javascript"><' + '/script>');
}

load("https://code.jquery.com/jquery-3.3.1.min.js");
// load("https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/1.0.9/cookieconsent.min.js");
load("https://maxcdn.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js");
load("./js/compiler.js");
load("./js/script.js");


// Cookie Consent
// window.cookieconsent_options = {
//     "message": "This website uses cookies to ensure you get the best experience on our website",
//     "dismiss": "Got it!",
//     "learnMore": "More info",
//     "link": "privacy.html",
//     "theme": "light-top"
// };

// Tawk.to
var $_Tawk_API = {},
    $_Tawk_LoadStart = new Date();
(function() {
    var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/5547af401aecef663055d9bb/default';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();

// Twitter
! function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + "://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);
    }
}(document, "script", "twitter-wjs");
