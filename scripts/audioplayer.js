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
        /*window.onresize = function () {
            console.log(wavesurfer);
            wavesurfer.drawer.containerWidth = wavesurfer.drawer.container.clientWidth;
            wavesurfer.drawBuffer();
        }*/
       
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

initPlayer("audio/nh_30.mp3", "01");
initPlayer("audio/nh_01_apex.mp3", "02");
initPlayer("audio/nh_01_aortic.mp3", "03");
initPlayer("audio/nh_02_pulmonic.mp3", "04");
initPlayer("audio/nh_06_apex_insp.mp3", "06");
initPlayer("audio/nh_06_apex_exp.mp3", "07");
initPlayer("audio/nh_03_erb.mp3", "05");

window.onresize = function () {
    var l = players.length;
    for (var i = 0; i < l; i++) {
        players[i].drawer.containerWidth = players[i].drawer.container.clientWidth;
        players[i].drawBuffer();
    }
}