// Reminder: All files are compiled into 1 JS file
var MWG;
(function (MWG) {
    window.onload = function () {
        var gameScreen = new MWG.GameScreen();
        var peer = new Peer('dog', { host: 'www.xiffa.com', port: 9000, key: 'peerjs' });
        var doesSupportData = util.browser;
        gameScreen.create();
    };
})(MWG || (MWG = {}));
var MWG;
(function (MWG) {
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
    MWG.GameScreen = GameScreen;
})(MWG || (MWG = {}));
var MWG;
(function (MWG) {
    var ButtonCode;
    (function (ButtonCode) {
        ButtonCode[ButtonCode["Left"] = 37] = "Left";
        ButtonCode[ButtonCode["Right"] = 39] = "Right";
        ButtonCode[ButtonCode["Down"] = 40] = "Down";
        ButtonCode[ButtonCode["Up"] = 38] = "Up";
    })(ButtonCode || (ButtonCode = {}));
    var KeyMan = (function () {
        function KeyMan() {
        }
        KeyMan.generateButtonMapArray = function () {
            while (this.buttonNames.length > 0) {
                this.buttonNames.pop();
                this.buttonDownBooleans.pop();
            }
            for (var buttonMember in ButtonCode) {
                if (typeof ButtonCode[buttonMember] === 'number') {
                    this.buttonNames.push(buttonMember);
                    this.buttonDownBooleans.push(false);
                }
            }
        };
        KeyMan.keyUpListener = function (e) {
            var i = 0;
            for (var buttonMember in KeyMan.buttonNames) {
                if (ButtonCode[KeyMan.buttonNames[buttonMember]] == e.keyCode)
                    KeyMan.buttonDownBooleans[i] = false;
                i++;
            }
        };
        KeyMan.keyDownListener = function (e) {
            var i = 0;
            for (var buttonMember in KeyMan.buttonNames) {
                if (ButtonCode[KeyMan.buttonNames[buttonMember]] == e.keyCode)
                    KeyMan.buttonDownBooleans[i] = true;
                i++;
            }
        };
        KeyMan.isButtonDown = function (buttonCode) {
            return false;
        };
        KeyMan.buttonNames = [];
        KeyMan.buttonDownBooleans = [];
        return KeyMan;
    })();
    KeyMan.generateButtonMapArray();
    document.onkeyup = KeyMan.keyUpListener;
    document.onkeydown = KeyMan.keyDownListener;
})(MWG || (MWG = {}));
//# sourceMappingURL=all.js.map
