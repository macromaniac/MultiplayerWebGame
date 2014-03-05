class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.canvas = document.createElement("canvas");
        this.canvas.width = 275;
        this.canvas.height = 275;
        document.body.appendChild(this.canvas);
        this.context = this.canvas.getContext("2d");
        this.context.fillStyle = "blue";
        this.context.translate(this.canvas.width / 2, this.canvas.height / 2);
        this.context.rotate(-Math.PI / 4);
        this.context.fillRect(45, 45, 50, 50);
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};