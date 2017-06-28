window.onload = function() {
    var distX = distY = 0;
    var tarDiv = document.getElementById('div1');
    document.onmousedown = function(e) {
        var eve = e || event;
        distX = eve.clientX - tarDiv.offsetLeft;
        distY = eve.clientY - tarDiv.offsetTop;

        document.onmousemove = function(e) {
            var eve = e || event;
            var x = eve.clientX - distX;
            var y = eve.clientY - distY;
            var window_width = document.documentElement.clientWidth - div1.offsetWidth;
            var window_height = document.documentElement.clientHeight - div1.offsetHeight;
            x = (x < 0) ? 0 : x;
            y = (y < 0) ? 0 : y;
            x = (x > window_width) ? window_width : x;
            y = (y > window_height) ? window_height : y;

            tarDiv.style.left = x + 'px';
            tarDiv.style.top = y + 'px';
        }

        document.onmouseup = function() {
            document.onmousemove = null;
            document.onmouup = null;
        };
    }
}
