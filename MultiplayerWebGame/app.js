window.onload = function () {
    var stage = new Kinetic.Stage({ container: 'container', width: 578, height: 200 });
    var layer = new Kinetic.Layer();
    var rect = new Kinetic.Rect({});
    rect.x(100);
    rect.y(100);
    rect.height(100);
    rect.width(100);
    rect.fill("Blue");
    rect.stroke("Black");
    var loop = function (timestamp) {
        rect.setX(rect.x() + .1);
        layer.draw();
        requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
    layer.add(rect);
    stage.add(layer);
};
//# sourceMappingURL=app.js.map
