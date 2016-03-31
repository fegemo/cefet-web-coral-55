function loadImage(path) {
    var img = new Image();
    img.src = path;
    return img;
}
var bubbleEl = loadImage('images/bolha.png');
function instantiateBubble() {
    var newBubbleEl = bubbleEl.cloneNode();
    newBubbleEl.style.position = 'fixed';
    newBubbleEl.style.transition = 'all 5s linear';
    newBubbleEl.style.bottom = '-50px';
    newBubbleEl.style.left = Math.random() * window.innerWidth + 'px';
    newBubbleEl.style.opacity = 1;
	newBubbleEl.style.transform = 'scale(' + (Math.random() / 2 + 0.5) + ')';
    newBubbleEl.style.zIndex = 10000;

    document.body.appendChild(newBubbleEl);
    window.setTimeout(function() {
        newBubbleEl.style.opacity = .5;
        newBubbleEl.style.bottom = window.innerHeight + 'px';
    }, 100);
    (function(oldBubbleEl) {
    	function removeElement() {
    		oldBubbleEl.removeEventListener('transitionend', removeElement);
    		document.body.removeChild(oldBubbleEl);
    	}
		oldBubbleEl.addEventListener('transitionend', removeElement);
    }(newBubbleEl));

    window.setTimeout(instantiateBubble, 7000 + Math.random()*5000)
}




instantiateBubble();