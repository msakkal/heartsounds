var players = [];

function initPlayer(file, num) {
    'use strict';
    var wavesurfer = Object.create(WaveSurfer);
    document.addEventListener('DOMContentLoaded', function () {

        wavesurfer.init({
            container: document.querySelector('#waveform' + num),
            minPxPerSec: 30,
            scrollParent: true,
            waveColor: "#575ff2",
            progressColor: "#575ff2",
            cursorColor: "#C22",
            cursorWidth: 2
        });

        wavesurfer.load(file);
       
        wavesurfer.on("finish", function () {
            $("#playpauseicon" + num).addClass("glyphicon-play");
            $("#playpauseicon" + num).removeClass("glyphicon-pause");
        });

        $("#playpause" + num).on("click", function () {
            wavesurfer.playPause();
            $("#playpauseicon" + num).toggleClass("glyphicon-play");
            $("#playpauseicon" + num).toggleClass("glyphicon-pause");
        });

        $("#stop" + num).on("click", function () {
            wavesurfer.stop();
            $("#playpauseicon" + num).addClass("glyphicon-play");
            $("#playpauseicon" + num).removeClass("glyphicon-pause");
        });
    });
    players.push(wavesurfer);
}

window.onresize = function () {
    var l = players.length;
    for (var i = 0; i < l; i++) {
        players[i].drawer.containerWidth = players[i].drawer.container.clientWidth;
        players[i].drawBuffer();
    }
}