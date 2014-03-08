module MWG {
    export class GameScreen {
        private stage: Kinetic.Stage;
        private foreground: Kinetic.Layer;
        private rect: Kinetic.Rect;
        private hero: Hero;
        constructor() { }
        create() {
            this.stage = new Kinetic.Stage({ container: 'container', width: 578, height: 200 });
            this.foreground = new Kinetic.Layer();
            this.stage.add(this.foreground);

            this.hero = new Hero(this.foreground);

            requestAnimationFrame(this.renderLoop);

        }
        private renderLoop = (timestamp) => {
            this.hero.tick();
            this.stage.draw();
            requestAnimationFrame(this.renderLoop);
        }
    }
}