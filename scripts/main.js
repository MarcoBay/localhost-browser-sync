var canvasOperate = document.createElement('canvas');
var ctxOperate = canvasOperate.getContext('2d');
var canvasResult = document.getElementById('result');
var ctxResult = canvasResult.getContext('2d');;
var video = document.getElementById('webcam');
var isContinuous = true;
var localMediaStream;
var playButton = document.getElementById('playButton');
var stopButton = document.getElementById('stopButton');

//Checking camera
function hasGetUserMedia() {
    return !!(navigator.getUserMedia || 
              navigator.webkitGetUserMedia || 
              navigator.mozGetUserMedia || 
              navigator.msGetUserMedia);
}

if (hasGetUserMedia()) {
    console.log("Camera OK");
} else {
    alert("Invalid!");
}

navigator.getUserMedia = navigator.getUserMedia || 
                         navigator.webkitGetUserMedia || 
                         navigator.mozGetUserMedia || 
                         navigator.msGetUserMedia;

function onSuccess(stream) {
    localMediaStream = stream;
    video.src = window.URL.createObjectURL(localMediaStream);
    video.onloadeddata = initCanvases();               
    video.play();
}

function onFail(e) {
    console.log('Cannot access WebCAM!', e);
}

function processOneFrame() {
    console.log('process.....');
    
    // get the data of current frame
    ctxOperate.drawImage(video, 0, 0, video.width, video. height);
    var imageData = ctxOperate.getImageData(0, 0, video.width, video.height);
    
    // do something on the imageData...
    
    // show result
    ctxResult.putImageData(imageData, 0, 0);
    
    // ask for next frame
    if (isContinuous) {
        requestAnimationFrame(processOneFrame);
    } else {
        return;
    }
}

function initCanvases() {
    console.log("video.videoWidth = " + video.videoWidth);
    console.log("video.videoHeight = " + video.videoHeight);
    console.log("video.width = " + video.width);
    console.log("video.height = " + video.height);

    if (video.videoWidth == 0 ||  video.videoHeight == 0) {
        requestAnimationFrame(initCanvases);
    }
    else {
        width = 280; // juts for suitable layout...
        height = video.videoHeight * width / video.videoWidth;
        video.setAttribute('width', width);
        video.setAttribute('height', height);
        canvasOperate.setAttribute('width', width);
        canvasOperate.setAttribute('height', height);
        canvasResult.setAttribute('width', width);
        canvasResult.setAttribute('height', height);

        isContinuous = true;
        requestAnimationFrame(processOneFrame);
    }
}

playButton.onclick = function() {
    navigator.getUserMedia({video: true, audio: false} , onSuccess, onFail);
}

stopButton.onclick = function() {
    isContinuous = false;
    video.pause();
    localMediaStream.stop();
}