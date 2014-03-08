module MWG {
    export class Hero {
        private stage: Kinetic.Stage;
        private foreground: Kinetic.Layer;
        private layer: Kinetic.Layer;
        private rect: Kinetic.Rect;
        constructor(layer: Kinetic.Layer) {
            this.layer = layer;

            this.rect = new Kinetic.Rect({});
            this.rect.x(100);
            this.rect.y(100);
            this.rect.height(100);
            this.rect.width(100);
            this.rect.fill("Blue");
            this.rect.stroke("Black");

            this.layer.add(this.rect);
            
             }
        create() {
            this.foreground = new Kinetic.Layer();
            this.foreground.add(this.rect);
            this.stage.add(this.foreground);

        }
        public tick(){
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