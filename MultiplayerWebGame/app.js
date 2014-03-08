// Reminder: All files are compiled into 1 JS file
var MWG;
(function (MWG) {
    window.onload = function () {
        var gameScreen = new MWG.GameScreen();
        try  {
            var peer = new Peer('dog', { host: 'www.xiffa.com', port: 9000, key: 'peerjs' });
        } catch (e) {
            alert(e.message);
            //alert("Peer service failed to start");
        }

        //var doesSupportData = util.browser;
        gameScreen.create();
    };
})(MWG || (MWG = {}));
//# sourceMappingURL=app.js.map
