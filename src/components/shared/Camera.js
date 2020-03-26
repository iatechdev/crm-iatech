import React, { useState } from 'react';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

function dataURItoBlob (dataURI) {
    let byteString = atob(dataURI.split(',')[1]);
  
    // separate out the mime component
    let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  
    let ab = new ArrayBuffer(byteString.length);
    let ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    let blob = new Blob([ab], {type: mimeString});
    return blob;
  }


 const promisifiedOldGUM = function(constraints, successCallback, errorCallback) {

    // First get ahold of getUserMedia, if present
    var getUserMedia = (navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia);
  
    // Some browsers just don't implement it - return a rejected promise with an error
    // to keep a consistent interface
    if(!getUserMedia) {
      return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
    }
  
    // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
    return new Promise(function(successCallback, errorCallback) {
      getUserMedia.call(navigator, constraints, successCallback, errorCallback);
    });
      
  }
  
  
  function padWithZeroNumber (number, width) {
    number = number + '';
    return number.length >= width ? number : new Array(width - number.length + 1).join('0') + number;
  }
  
  function getFileExtention (blobType) {
    // by default the extention is .png
    let extention = IMAGE_TYPES.PNG;
  
    if (blobType === 'image/jpeg') {
      extention = IMAGE_TYPES.JPG;
    }
    return extention;
  }
 
  function getFileName (imageNumber, blobType) {
    const prefix = 'photo';
    const photoNumber = padWithZeroNumber(imageNumber, 4);
    const extention = getFileExtention(blobType);
    promisifiedOldGUM ();
  
    return `${prefix}-${photoNumber}.${extention}`;
  }
  
  function downloadImageFileFomBlob (blob, imageNumber) {
    window.URL = window.webkitURL || window.URL;
  
    let anchor = document.createElement('a');
    anchor.download = getFileName(imageNumber, blob.type);
    anchor.href = window.URL.createObjectURL(blob);
    let mouseEvent = document.createEvent('MouseEvents');
    mouseEvent.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
    anchor.dispatchEvent(mouseEvent);
  }
  
  function downloadImageFile (dataUri, imageNumber) {
    let blob = dataURItoBlob(dataUri);
    downloadImageFileFomBlob(blob, imageNumber);
  }

function App (props) {
  const [imageNumber, setImageNumber] = useState(0);
  
    function handleTakePhoto (dataUri) {
      downloadImageFile(dataUri, imageNumber);
      setImageNumber(imageNumber + 1);
    }

  function handleTakePhotoAnimationDone (dataUri) {
    // Do stuff with the photo...
    console.log('takePhoto');
  }

  function handleCameraError (error) {
    console.log('handleCameraError', error);
  }

  function handleCameraStart (stream) {
    console.log('handleCameraStart');
  }

  function handleCameraStop () {
    console.log('handleCameraStop');
  }

  return (
    <Camera
    id="camera"

      onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
      onTakePhotoAnimationDone = { (dataUri) => { handleTakePhotoAnimationDone(dataUri); } }
      onCameraError = { (error) => { handleCameraError(error); } }
      idealFacingMode = {FACING_MODES.ENVIRONMENT}
      idealResolution = {{width: 640, height: 480}}
      imageType = {IMAGE_TYPES.JPG}
      imageCompression = {0.97}
      isMaxResolution = {true}
      isImageMirror = {true}
      isSilentMode = {false}
      isDisplayStartCameraError = {true}
      isFullscreen = {true}
      sizeFactor = {1}
      onCameraStart = { (stream) => { handleCameraStart(stream); } }
      onCameraStop = { () => { handleCameraStop(); } }
    />
  );
}

  
  export default App;


  /*function dataURItoBlob (dataURI) {
    let byteString = atob(dataURI.split(',')[1]);
  
    // separate out the mime component
    let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  
    let ab = new ArrayBuffer(byteString.length);
    let ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    let blob = new Blob([ab], {type: mimeString});
    return blob;
  }


 const promisifiedOldGUM = function(constraints, successCallback, errorCallback) {

    // First get ahold of getUserMedia, if present
    var getUserMedia = (navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia);
  
    // Some browsers just don't implement it - return a rejected promise with an error
    // to keep a consistent interface
    if(!getUserMedia) {
      return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
    }
  
    // Otherwise, wrap the call to the old navigator.getUserMedia with a Promise
    return new Promise(function(successCallback, errorCallback) {
      getUserMedia.call(navigator, constraints, successCallback, errorCallback);
    });
      
  }
  
  
  function padWithZeroNumber (number, width) {
    number = number + '';
    return number.length >= width ? number : new Array(width - number.length + 1).join('0') + number;
  }
  
  function getFileExtention (blobType) {
    // by default the extention is .png
    let extention = IMAGE_TYPES.PNG;
  
    if (blobType === 'image/jpeg') {
      extention = IMAGE_TYPES.JPG;
    }
    return extention;
  }
 
  function getFileName (imageNumber, blobType) {
    const prefix = 'photo';
    const photoNumber = padWithZeroNumber(imageNumber, 4);
    const extention = getFileExtention(blobType);
    promisifiedOldGUM ();
  
    return `${prefix}-${photoNumber}.${extention}`;
  }
  
  function downloadImageFileFomBlob (blob, imageNumber) {
    window.URL = window.webkitURL || window.URL;
  
    let anchor = document.createElement('a');
    anchor.download = getFileName(imageNumber, blob.type);
    anchor.href = window.URL.createObjectURL(blob);
    let mouseEvent = document.createEvent('MouseEvents');
    mouseEvent.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
    anchor.dispatchEvent(mouseEvent);
  }
  
  function downloadImageFile (dataUri, imageNumber) {
    let blob = dataURItoBlob(dataUri);
    downloadImageFileFomBlob(blob, imageNumber);
  }
  
  function App (props) {
    const [imageNumber, setImageNumber] = useState(0);
  
    function handleTakePhoto (dataUri) {
      downloadImageFile(dataUri, imageNumber);
      setImageNumber(imageNumber + 1);
    }
  
    return (
      <Camera
       id="camera"

        onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
        imageType={IMAGE_TYPES.PNG}
      />
    );
  }*/