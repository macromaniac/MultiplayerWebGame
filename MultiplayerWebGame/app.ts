
// Reminder: All files are compiled into 1 JS file

module MWG {
    declare var Peer: any;
    declare var util: any;
    window.onload = () => {
        var gameScreen = new GameScreen();
        var peer = new Peer('dog', { host: 'www.xiffa.com', port: 9000, key: 'peerjs' });
        var doesSupportData = util.browser;
        gameScreen.create();
   };
}