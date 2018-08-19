function load(script) {
    document.write('<' + 'script src="' + script + '" type="text/javascript"><' + '/script>');
}

load("https://code.jquery.com/jquery-3.3.1.min.js");
load("https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js");
load("https://maxcdn.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js");
load("./js/compiler.js");
load("./js/script.js");


// Cookie Consent
window.addEventListener("load", function() {
    window.cookieconsent.initialise({
        "palette": {
            "popup": {
                "background": "#252e39"
            },
            "button": {
                "background": "#14a7d0",
                "text": "#000000"
            }
        },
        "theme": "classic",
        "position": "bottom-left",
        "content": {
            "href": "https://evolveservers.com/privacy.html"
        }
    })
});

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
