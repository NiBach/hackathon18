import React, { Component } from 'react';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
//import { firebaseConnect } from 'react-redux-firebase';
import { compose } from 'C:/Users/bachr/AppData/Local/Microsoft/TypeScript/3.0/node_modules/redux';
import { connect } from "react-redux";
import { push } from 'connected-react-router';
import imageActionCreator from "../actions/imageAction";


class CameraView extends Component {
    onTakePhoto(dataUri) {
        // Do stuff with the photo...

        
        console.log(this.props);
        const {dispatch} = this.props;
        dispatch(imageActionCreator(dataUri));
        dispatch(push('/cameraDialog'));
    }

    onCameraError(error) {
        console.error('onCameraError', error);
    }

    onCameraStart(stream) {
        console.log('onCameraStart');
    }

    onCameraStop() {
        console.log('onCameraStop');
    }

    render() {
        return (
            <div className='cameraWindow-not'>
                <Camera
                    onTakePhoto={(dataUri) => { this.onTakePhoto(dataUri); }}
                    //onCameraError={(error) => { this.onCameraError(error); }}
                    idealFacingMode={FACING_MODES.ENVIRONMENT}
                    idealResolution={{ width: this.props.height, height: this.innerWidth }} // the width and height are flipped in this module for some reason
                    imageType={IMAGE_TYPES.JPG}
                    //imageCompression={0.97}
                    //isMaxResolution={true}
                    isImageMirror={false}
                    isDisplayStartCameraError={true}
                    //sizeFactor={0.01}
                    //onCameraStart={(stream) => { this.onCameraStart(stream); }}
                    //onCameraStop={() => { this.onCameraStop(); }}
                />
            </div>
        );
    }
}

CameraView.defaultProps = {
    height: window.innerHeight - 56,
    width: window.innerWidth,
}

export default compose(
    connect(),
)(CameraView);