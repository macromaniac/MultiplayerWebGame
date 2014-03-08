define(["require", "exports"], function(require, exports) {
    var GameScreen = (function () {
        function GameScreen() {
            var _this = this;
            this.renderLoop = function (timestamp) {
                var x = _this.rect.x();
                _this.rect.setX(x + .1);
                _this.stage.draw();
                requestAnimationFrame(_this.renderLoop);
            };
        }
        GameScreen.prototype.create = function () {
            this.stage = new Kinetic.Stage({ container: 'container', width: 578, height: 200 });
            this.foreground = new Kinetic.Layer();
            this.rect = new Kinetic.Rect({});
            this.rect.x(100);
            this.rect.y(100);
            this.rect.height(100);
            this.rect.width(100);
            this.rect.fill("Blue");
            this.rect.stroke("Black");
            requestAnimationFrame(this.renderLoop);
            this.foreground.add(this.rect);
            this.stage.add(this.foreground);
        };
        return GameScreen;
    })();
    exports.GameScreen = GameScreen;
});
//# sourceMappingURL=GameScreen.js.map
