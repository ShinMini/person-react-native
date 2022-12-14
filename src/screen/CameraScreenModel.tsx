import React, {Component} from 'react';
import {Alert} from 'react-native';
import CameraScreen from 'react-native-camera-kit';

export default class CameraScreenModel extends Component {
  onBottomButtonPressed(event: {captureImages: any; type: any}) {
    const captureImages = JSON.stringify(event.captureImages);
    Alert.alert(
      `"${event.type}" Button Pressed`,
      `${captureImages}`,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );
  }

  render() {
    return (
      <CameraScreen
        actions={{rightButtonText: 'Done', leftButtonText: 'Cancel'}}
        onBottomButtonPressed={(event: any) =>
          this.onBottomButtonPressed(event)
        }
        flashImages={{
          on: require('../images/flashOn.png'),
          off: require('../images/flashOff.png'),
          auto: require('../images/flashAuto.png'),
        }}
        cameraFlipImage={require('../images/cameraFlipIcon.png')}
        captureButtonImage={require('../images/cameraButton.png')}
        torchOnImage={require('../images/torchOn.png')}
        torchOffImage={require('../images/torchOff.png')}
        showCapturedImageCount
      />
    );
  }
}
