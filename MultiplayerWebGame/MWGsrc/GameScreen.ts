module MWG {
    export class GameScreen {
        private stage: Kinetic.Stage;
        private foreground: Kinetic.Layer;
        private rect: Kinetic.Rect;
        constructor() { }
        create() {
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

        }
        private renderLoop = (timestamp) => {
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
            this.stage.draw();
            requestAnimationFrame(this.renderLoop);
        }
    }
}