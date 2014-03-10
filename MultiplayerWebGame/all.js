﻿var MWG;
(function (MWG) {
    window.onload = function () {
        var gameScreen = new MWG.GameScreen();
        var peer = new Peer('dog', { host: 'www.xiffa.com', port: 9000, key: 'peerjs' });
        peer.on('open', function (id) {
        });
        peer.on('error', function (id) {
            alert('Error connecting');
        });
        gameScreen.create();
    };
})(MWG || (MWG = {}));
var MWG;
(function (MWG) {
    var Cipher = (function () {
        function Cipher() {
        }
        Cipher.encodeButton = function (buttonCode) {
            return "";
        };
        Cipher.decodeButton = function (buttonData) {
            return 65 /* A */;
        };
        return Cipher;
    })();
    MWG.Cipher = Cipher;
})(MWG || (MWG = {}));
var MWG;
(function (MWG) {
    (function (ButtonCode) {
        ButtonCode[ButtonCode["Shift"] = 16] = "Shift";
        ButtonCode[ButtonCode["Ctrl"] = 17] = "Ctrl";
        ButtonCode[ButtonCode["Alt"] = 18] = "Alt";
        ButtonCode[ButtonCode["Left"] = 37] = "Left";
        ButtonCode[ButtonCode["Up"] = 38] = "Up";
        ButtonCode[ButtonCode["Right"] = 39] = "Right";
        ButtonCode[ButtonCode["Down"] = 40] = "Down";
        ButtonCode[ButtonCode["Zero"] = 48] = "Zero";
        ButtonCode[ButtonCode["One"] = 49] = "One";
        ButtonCode[ButtonCode["Two"] = 50] = "Two";
        ButtonCode[ButtonCode["Three"] = 51] = "Three";
        ButtonCode[ButtonCode["Four"] = 52] = "Four";
        ButtonCode[ButtonCode["Five"] = 53] = "Five";
        ButtonCode[ButtonCode["Six"] = 54] = "Six";
        ButtonCode[ButtonCode["Seven"] = 55] = "Seven";
        ButtonCode[ButtonCode["Eight"] = 56] = "Eight";
        ButtonCode[ButtonCode["Nine"] = 57] = "Nine";
        ButtonCode[ButtonCode["A"] = 65] = "A";
        ButtonCode[ButtonCode["B"] = 66] = "B";
        ButtonCode[ButtonCode["C"] = 67] = "C";
        ButtonCode[ButtonCode["D"] = 68] = "D";
        ButtonCode[ButtonCode["E"] = 69] = "E";
        ButtonCode[ButtonCode["F"] = 70] = "F";
        ButtonCode[ButtonCode["G"] = 71] = "G";
        ButtonCode[ButtonCode["H"] = 72] = "H";
        ButtonCode[ButtonCode["I"] = 73] = "I";
        ButtonCode[ButtonCode["J"] = 74] = "J";
        ButtonCode[ButtonCode["K"] = 75] = "K";
        ButtonCode[ButtonCode["L"] = 76] = "L";
        ButtonCode[ButtonCode["M"] = 77] = "M";
        ButtonCode[ButtonCode["N"] = 78] = "N";
        ButtonCode[ButtonCode["O"] = 79] = "O";
        ButtonCode[ButtonCode["P"] = 80] = "P";
        ButtonCode[ButtonCode["Q"] = 81] = "Q";
        ButtonCode[ButtonCode["R"] = 82] = "R";
        ButtonCode[ButtonCode["S"] = 83] = "S";
        ButtonCode[ButtonCode["T"] = 84] = "T";
        ButtonCode[ButtonCode["U"] = 85] = "U";
        ButtonCode[ButtonCode["V"] = 86] = "V";
        ButtonCode[ButtonCode["W"] = 87] = "W";
        ButtonCode[ButtonCode["X"] = 88] = "X";
        ButtonCode[ButtonCode["Y"] = 89] = "Y";
        ButtonCode[ButtonCode["Z"] = 90] = "Z";
    })(MWG.ButtonCode || (MWG.ButtonCode = {}));
    var ButtonCode = MWG.ButtonCode;
    var buttonMax = 100;
    var KeyMan = (function () {
        function KeyMan() {
        }
        KeyMan.isButtonDown = function (buttonCode) {
            return KeyManUtil.buttonDownBooleans[buttonCode];
        };
        return KeyMan;
    })();
    MWG.KeyMan = KeyMan;

    //Hide this class
    var KeyManUtil = (function () {
        function KeyManUtil() {
        }
        KeyManUtil.generateButtonMapArray = function () {
            while (this.buttonDownBooleans.length < buttonMax) {
                KeyManUtil.buttonDownBooleans.push(false);
            }
        };
        KeyManUtil.keyUpListener = function (e) {
            KeyManUtil.buttonDownBooleans[e.keyCode] = false;
        };
        KeyManUtil.keyDownListener = function (e) {
            KeyManUtil.buttonDownBooleans[e.keyCode] = true;
        };
        KeyManUtil.buttonDownBooleans = [];
        return KeyManUtil;
    })();
    KeyManUtil.generateButtonMapArray();
    document.onkeyup = KeyManUtil.keyUpListener;
    document.onkeydown = KeyManUtil.keyDownListener;
})(MWG || (MWG = {}));
var MWG;
(function (MWG) {
    var GameScreen = (function () {
        function GameScreen() {
            var _this = this;
            this.renderLoop = function (timestamp) {
                _this.hero.tick();
                _this.villian.tick();
                _this.stage.draw();
                requestAnimationFrame(_this.renderLoop);
            };
        }
        GameScreen.prototype.create = function () {
            this.stage = new Kinetic.Stage({ container: 'container', width: 620, height: 400 });
            this.foreground = new Kinetic.Layer();
            this.stage.add(this.foreground);

            this.hero = new MWG.Hero(this.foreground, true);
            this.villian = new MWG.Hero(this.foreground, false);

            requestAnimationFrame(this.renderLoop);
        };
        return GameScreen;
    })();
    MWG.GameScreen = GameScreen;
})(MWG || (MWG = {}));
var MWG;
(function (MWG) {
    var Hero = (function () {
        function Hero(layer, isVillain) {
            this.layer = layer;

            this.rect = new Kinetic.Rect({});
            this.rect.x(100);
            this.rect.y(100);
            this.rect.height(100);
            this.rect.width(100);
            if (isVillain == true) {
                this.rect.fill("Red");
                this.rect.x(this.rect.x() + 100);
            } else {
                this.rect.fill("Blue");
            }
            this.rect.stroke("Black");

            this.layer.add(this.rect);
        }
        Hero.prototype.tick = function () {
            var speed = 5;
            if (MWG.KeyMan.isButtonDown(87 /* W */)) {
                this.rect.setY(this.rect.y() - speed);
            }
            if (MWG.KeyMan.isButtonDown(83 /* S */)) {
                this.rect.setY(this.rect.y() + speed);
            }
            if (MWG.KeyMan.isButtonDown(65 /* A */)) {
                this.rect.setX(this.rect.x() - speed);
            }
            if (MWG.KeyMan.isButtonDown(68 /* D */)) {
                this.rect.setX(this.rect.x() + speed);
            }
        };
        return Hero;
    })();
    MWG.Hero = Hero;
})(MWG || (MWG = {}));
//# sourceMappingURL=all.js.map
