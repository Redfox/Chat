document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    console.log('Device is Ready')
    //ip of server
    var socket = io.connect('http://192.168.0.102:2000/');

    socket.on('connect', function () {

    });

    socket.on('id', function(d){
        console.log(d);
    });
}