module MWG {
    export class GameScreen {
        private stage: Kinetic.Stage;
        private foreground: Kinetic.Layer;
        private rect: Kinetic.Rect;
        private hero: Hero;
        private villian: Hero;
        constructor() { }
        create() {
            this.stage = new Kinetic.Stage({ container: 'container', width: 620 , height: 400 });
            this.foreground = new Kinetic.Layer();
            this.stage.add(this.foreground);

            this.hero = new Hero(this.foreground, true);
            this.villian = new Hero(this.foreground, false);

            requestAnimationFrame(this.renderLoop);

        }
        private renderLoop = (timestamp) => {
            this.hero.tick();
            this.villian.tick();
            this.stage.draw();
            requestAnimationFrame(this.renderLoop);
        }
    }
}