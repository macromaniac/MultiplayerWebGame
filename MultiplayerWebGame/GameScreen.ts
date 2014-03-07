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
            var x: number = this.rect.x();
            this.rect.setX(x + .1);
            this.stage.draw();
            requestAnimationFrame(this.renderLoop);
        }
    }
}