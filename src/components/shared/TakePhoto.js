import React, { Component} from 'react';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import { BrowserRouter } from 'react-router-dom';


export default class TakePhoto extends Component{
  constructor(props){
    super(props);
    this.state = {
      dataUri:'',
      stream:''
    }
    }

  
    handleTakePhotoAnimationDone = (dataUri) =>{
      // Do stuff with the photo...
      this.setState= {dataUri}
      // redirect the MainComponent
      this.props.history.goBack()
      
    }
  
    handleCameraError = (error) => {
      console.log('handleCameraError', error);
    }
  
    handleCameraStart = (stream) => {
      console.log('handleCameraStart', this.props.location.state= "hello");
    }
    handleCameraStop = () => {
      console.log('handleCameraStop');
    }
  

    render(){
      return(
        <Camera
        onTakePhotoAnimationDone = { (dataUri) => { this.handleTakePhotoAnimationDone(dataUri); } }
        onCameraError = { (error) => { this.handleCameraError(error); } }
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
        onCameraStart = { (stream) => { this.handleCameraStart(stream); } }
        onCameraStop = { () => { this.handleCameraStop(); } }
      />
      )
    }

  }
