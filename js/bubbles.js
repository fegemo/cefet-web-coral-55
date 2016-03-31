function loadImage(path) {
    var img = new Image();
    img.src = path;
    return img;
}

function instantiateBubble() {
    var newBubbleEl = loadImage('images/bolha.png');
    newBubbleEl.style.position = 'fixed';
    newBubbleEl.style.transition = 'all 5s linear';
    newBubbleEl.style.bottom = '-50px';
    newBubbleEl.style.left = Math.random() * window.innerWidth + 'px';
    newBubbleEl.style.opacity = 1;
    newBubbleEl.style.zIndex = 10000;

    document.body.appendChild(newBubbleEl);
    window.setTimeout(function() {
        newBubbleEl.style.opacity = .5;
        newBubbleEl.style.bottom = window.innerHeight + 'px';
    }, 100);

    window.setTimeout(instantiateBubble, 1000 + Math.random()*5000)
}




instantiateBubble();