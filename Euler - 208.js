var round = number => Math.round(number * 10000) / 10000;

var totalPaths, origin = {x:0, y:0}, maxArcs, sine, cos;

/**
 * 
 * Call getPaths(5, 70) to solve the original problem.
 * Or for any other combinations of n, m.
 * 
 * Refer: https://projecteuler.net/problem=208
 * 
 * @param {The nth part of Arc allowed} n 
 * @param {The max distance allowed} m 
 */
function getPaths(n, m) {
    totalPaths = 0;
    maxArcs = m;
    
    if(maxArcs < 1) return;

    var angle = (2 * Math.PI) / n, 
        center = {x: 1, y: 0},
        point = origin,
        arcsTravelled = 0;
    
    // store the sines and cosines
    sine = round(Math.sin(angle));
    cos = round(Math.cos(angle));

    // compute 1st to reduce symmetrical patters
    var  point1 = rotate(center, point, -angle);

    move(center, point1, -angle, ++arcsTravelled);
    
    return (totalPaths * 2);
}

function move(center, point, angle, arcsTravelled) {
    var center2 = getCenter(center, point);

    var point1 = rotate(center, point, angle),
        point2 = rotate(center2, point, -angle);

    if(++arcsTravelled != maxArcs) {
        move(center, point1, angle, arcsTravelled);
        move(center2, point2, -angle, arcsTravelled);
    } else {
        if (isEqual(point1, origin)) totalPaths++;
        if (isEqual(point2, origin)) totalPaths++;
    }
}

function getCenter(center, point) {
    var dx = point.x - center.x,
        dy = point.y - center.y;
    var c1 = {x: (point.x + dx), y: (point.y + dy)},
        c2 = {x: (point.x - dx), y: (point.y - dy)};
    return isEqual(c1, center) ? c2 : c1;
}

function isEqual(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
}

// function rotate(center, point, angle) {
//     var newPosition = {};
//     newPosition.x = round(Math.cos(angle) * (point.x - center.x) - Math.sin(angle) * (point.y - center.y) + center.x);
//     newPosition.y = round(Math.sin(angle) * (point.x - center.x) + Math.cos(angle) * (point.y - center.y) + center.y);
//     return newPosition;
// }

// Without rounding gives error
// function rotate(center, point, angle) {
//     var newPosition = {}, sin = angle > 0 ? sine : -sine;
//     newPosition.x = cos * (point.x - center.x) - sin * (point.y - center.y) + center.x;
//     newPosition.y = sin * (point.x - center.x) + cos * (point.y - center.y) + center.y;
//     return newPosition;
// }

function rotate(center, point, angle) {
    var newPosition = {}, sin = angle > 0 ? sine : -sine;
    newPosition.x = round(cos * (point.x - center.x) - sin * (point.y - center.y) + center.x);
    newPosition.y = round(sin * (point.x - center.x) + cos * (point.y - center.y) + center.y);
    return newPosition;
}
