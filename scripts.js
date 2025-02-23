

function init() {
    var fadeElements = document.getElementsByClassName('fade-in');
    checkVisibility(fadeElements);
    window.onscroll = function() {
        checkVisibility(fadeElements);
    };
}

function checkVisibility(elements) {
    var windowHeight = window.innerHeight;
    var scrollY = window.scrollY;

    for (var i = 0; i < elements.length; i++) {
        var elementOffset = elements[i].getBoundingClientRect().top + scrollY;

        if (scrollY + windowHeight > elementOffset + 100) {
            elements[i].classList.add('visible');
        }
    }
}
