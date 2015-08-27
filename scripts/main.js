function JQueryRequireFunc() {

    //Make every elements roll on the screen
    window.rollOverEverything = function() {
        $('body>*>*>*>* *').css({
            transition: "all 5s",
            transform: "rotate(1080deg) scale(0.8)"
        });
        setTimeout(function() {
            $('body>*>*>*>* *').css({
                transform: ""
            });
        }, 5 * 1000);
        setTimeout(function() {
            $('body>*>*>*>* *').css({
                transition: ""
            });
        }, 10 * 1000);
    };

    // Juste pour test git, y'a rien encore de vraiment sympa
    window.startTheDoom = function(size) {
        var doomSrc = "data:image/png;base64,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";
        var doomElement =
            $('<img>')
                .attr('src', doomSrc)
                .width(size)
                .css({
                    transition: "all 5s",
                    transform: "rotate(1080deg) scale(0.8)"
                });

        $('body').append(doomElement);
    };

    window.beatingHearth = function(rep, freq) {
        freq = freq || 700;
        rep = rep || 10;
        $('body>*>*>*>* *').css({
            transition: "all " + freq + "ms"
        });
        var up = true;
        var beat = function() {
            if (rep < 0) {
                $('body>*>*>*>* *').css({
                    transform: "",
                    transition: ""
                });
                return;
            }
            if (up)
                $('body>*>*>*>* *').css({
                    transform: "scale(1.001)"
                });
            else
                $('body>*>*>*>* *').css({
                    transform: "scale(.999)"
                });
            up = !up;
            rep--;
            setTimeout(beat, freq);
        };
        beat();
    };
}

//include JQuery cdn if needed
if (typeof jQuery == 'undefined') {
    var headTag = document.getElementsByTagName("head")[0];
    var jqTag = document.createElement('script');
    jqTag.type = 'text/javascript';
    jqTag.src = 'https://code.jquery.com/jquery-2.1.4.min.js';
    jqTag.onload = JQueryRequireFunc;
    headTag.appendChild(jqTag);
} else {
    JQueryRequireFunc();
}
