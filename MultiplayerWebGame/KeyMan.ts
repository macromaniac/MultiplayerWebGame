module MWG {
    enum ButtonCode{
        Left= 37,
        Right= 39,
        Down= 40,
        Up= 38
    }
    class KeyMan {
        private static buttonNames: string[] = [];
        private static buttonDownBooleans: boolean[] = [];
        static generateButtonMapArray() {
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
        }
        static keyUpListener (e: KeyboardEvent) {
            var i: number = 0;
            for (var buttonMember in KeyMan.buttonNames) {
                if (ButtonCode[KeyMan.buttonNames[buttonMember]] == e.keyCode)
                    KeyMan.buttonDownBooleans[i] = false;
                i++;
            }
        }
        static keyDownListener(e: KeyboardEvent) {
            var i: number = 0;
            for (var buttonMember in KeyMan.buttonNames) {
                if (ButtonCode[KeyMan.buttonNames[buttonMember]] == e.keyCode)
                    KeyMan.buttonDownBooleans[i] = true;
                i++;
            }
        }
        public static isButtonDown(buttonCode: ButtonCode): boolean {
            return false;
        }
    }
    KeyMan.generateButtonMapArray();
    document.onkeyup = KeyMan.keyUpListener;
    document.onkeydown = KeyMan.keyDownListener;
}