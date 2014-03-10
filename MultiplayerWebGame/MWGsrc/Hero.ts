module MWG {
    export class Hero {
        private stage: Kinetic.Stage;
        private foreground: Kinetic.Layer;
        private layer: Kinetic.Layer;
        private rect: Kinetic.Rect;
        constructor(layer: Kinetic.Layer, isVillain : boolean) {
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
        public tick() {
            var speed: number = 5;
            if (KeyMan.isButtonDown(ButtonCode.W)) {
                this.rect.setY(this.rect.y() - speed);
            }
            if (KeyMan.isButtonDown(ButtonCode.S)) {
                this.rect.setY(this.rect.y() + speed);
            }
            if (KeyMan.isButtonDown(ButtonCode.A)) {
                this.rect.setX(this.rect.x() - speed);
            }
            if (KeyMan.isButtonDown(ButtonCode.D)) {
                this.rect.setX(this.rect.x() + speed);
            }
        }
    }
}