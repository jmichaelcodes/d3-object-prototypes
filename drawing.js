enableDrawing();

function enableDrawing() {
    document.addEventListener('mousedown', function(e) {
        var red = Math.round(Math.random() * 255);
        var green = Math.round(Math.random() * 255);
        var blue = Math.round(Math.random() * 255);
        // console.log(red, green, blue);
        var rgb = 'rgb(' + red + ', ' + green + ', ' + blue + ')'
        var box = document.createElement('div');
        box.style.position = 'absolute';
        box.style.top = e.target.x + 'px';
        box.style.left = e.target.y + 'px';
        box.style.width = '10px';
        box.style.height = '10px';
        box.style.backgroundColor = rgb;

        document.body.appendChild(box);
    });
}