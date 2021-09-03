function polar2Cartesian(theta) {
    return [Math.cos(theta), Math.sin(theta)];
}

function withOffset([x, y]) {
    return [x + offsetX, y + offsetY];
}

function withColor(color, callback) {
    let currentColor;

    if (color) {
        currentColor = color;
        ctx.fillStyle = color;
    }

    callback();

    if (currentColor) {
        ctx.fillStyle = currentColor;
    }
}

function drawLine(from, to, color) {
    withColor(color, () => {
        ctx.beginPath();
        ctx.moveTo(...withOffset(from));
        ctx.lineTo(...withOffset(to));
        ctx.closePath();
        ctx.stroke();
    });
}

function drawPoint(point, color, radius = 2) {
    withColor(color, () => {
        ctx.fillRect(...withOffset(point), radius, radius);
    });
}

let ctx = null;
let offsetX = 600;
let offsetY = 600;

!function(canvas) {
    ctx = canvas.getContext('2d');
    ctx.lineWidth = 1;

    drawLine([-500, 0], [500, 0]);
    drawLine([0, -500], [0, 500]);

    // drawPoint([10, 10]);

    for (let i = 500; i <= 2500; ++i) {
        const cart = polar2Cartesian(i);
        drawPoint([i * cart[0] / 6, i * cart[1] / 6], isPrime(i) ? 'green' : 'red', isPrime(i) ? 3 : 2);
    }
}(document.querySelector('#canvas'));
