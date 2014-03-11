module MWG {
    declare var Peer: any;
    declare var util: any;
    window.onload = () => {
        var gameScreen = new GameScreen();
        var peer = new Peer({ host: 'www.xiffa.com', port: 9000, key: 'peerjs' });
        peer.on('open', function (id) {
            alert('Connected!');

        });
        peer.on('error', function (id) {
            alert('Error connecting');
        });

        var socket = io.connect('http://xiffa.com:23156');
        socket.on('news', function (data) {
            alert(data);
            socket.emit('my other event', { my: 'data' });
        });
        gameScreen.create();
    };
}