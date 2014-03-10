module MWG {
    declare var Peer: any;
    declare var util: any;
    window.onload = () => {
        var gameScreen = new GameScreen();
        var peer = new Peer('dog', { host: 'www.xiffa.com', port: 9000, key: 'peerjs' });
        peer.on('open', function (id) {

        });
        peer.on('error', function (id) {
            alert('Error connecting');
        });
        gameScreen.create();
    };
}