$.fn.typing = function(options) {
    var o = $.extend({}, $.fn.typing.defaultOptions, options);
    var givenArray = o.strings,
        newArray = [],
        nl = givenArray.length,
        count = o.loopCount;
    for (var i = 0; i < count; i++) {
        for (var m = 0; m < nl; m++) newArray.push(givenArray[m])
    }
    var names = newArray,
        a = 0,
        i, j, l, type, e = $(this);
    e.css('color', o.color);
    e.next().append(o.cursorChar);
    if (o.cursorBlink) e.next().css('animation', 'blink 0.7s infinite');
    looping(names[a]);

    function looping(n) {
        if (o.fade) {
            e.next().fadeIn(1000);
            e.fadeIn(1000)
        }
        if (n !== undefined) {
            type = n, l = type.length;
            for (i = 0; i < l; i++) typingLetters(i)
        }
    }

    function typingLetters(i) {
        setTimeout(function() {
            e.html(e.text() + '<span style="color:' + o.typingColor + '; opacity:' + o.typingOpacity + '">' + type.charAt(i) + '</span>');
            o.onTyping.call();
            if (e.text().length == l) {
                e.find('span').css({
                    'color': '',
                    'opacity': ''
                });
                o.onFinishedTyping.call();
                setTimeout(finishTyping, o.stringStartDelay)
            }
        }, 1000 + i * o.typeDelay)
    }

    function finishTyping() {
        if (o.fade && a != names.length - 1) {
            e.next().fadeOut(1000);
            e.fadeOut(1000, function() {
                e.text('');
                o.onFinishedFadeErasing.call();
                looping(names[a += 1])
            })
        } else
            for (j = l - 1; j >= 0; j--) erasing(j)
    }

    function erasing(j) {
        setTimeout(function() {
            if (a != names.length - 1) {
                o.onErasing.call();
                e.html(e.text().slice(0, -1));
                if (e.text().length == 0) {
                    o.onFinishedErasing.call();
                    looping(names[a += 1])
                }
            } else {
                e.next().remove();
                o.onAllTypingCompleted.call()
            }
        }, 1000 + j * o.eraseDelay)
    }
};
$.fn.typing.defaultOptions = {
    strings: ['Default string 1', 'Default string 2', 'Default string 3', 'Default string 4'],
    eraseDelay: 25,
    typeDelay: 150,
    stringStartDelay: 2000,
    color: '#0094ff',
    typingColor: '#0094ff',
    typingOpacity: '0.3',
    loopCount: 1,
    cursorChar: '<span style="border:0.5px solid" />',
    cursorBlink: true,
    fade: false,
    onTyping: function() {},
    onFinishedTyping: function() {},
    onErasing: function() {},
    onFinishedErasing: function() {},
    onAllTypingCompleted: function() {},
    onFinishedFadeErasing: function() {}
}