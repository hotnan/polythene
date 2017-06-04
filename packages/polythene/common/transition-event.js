
export default (function () {
    var el = document.createElement('fakeelement');
    var animations = {
        'animation': 'animationend',
        'OAnimation': 'oAnimationEnd',
        'MozAnimation': 'animationend',
        'WebkitAnimation': 'webkitAnimationEnd'
    };
    for (var a in animations) {
        if (el.style[a] !== undefined) {
            return animations[a];
        }
    }
});