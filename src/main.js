'use strict';

// 媒体流约束，本例只开启视频
const mediaStreamConstraints = {
    video: true,
};
// video元素用于保存视频流
const localVideo = document.querySelector('video');

// 本地视频流
let localStream;

// getUserMedia获取视频流成功处理函数，添加MediaStream到video标签
function gotLocalMediaStream(mediaStream) {
    localStream = mediaStream;
    localVideo.srcObject = mediaStream;
    setTimeout(() => {
        localVideo.play();
    }, 200);
}

// 错误处理函数，将错误信息log到console
function handleLocalMediaStreamError(error) {
    console.log('navigator.getUserMedia error: ', error);
}

// 初始化媒体流
navigator.mediaDevices.getUserMedia(mediaStreamConstraints)
    .then(gotLocalMediaStream).catch(handleLocalMediaStreamError);