import React, { Component } from 'react';
import connectStyle from 'utils/connectStyle';
import {
  Icon,
  Fab,
} from 'native-base';
import styles from './styles';

class FabButton extends Component {
  render() {
    return (
      <Fab
        containerStyle={{ marginLeft: 10 }}
        style={{ backgroundColor: '#fb8347' }}
        position="bottomRight"
        onPress={() => console.log('PRESS')}
      >
        <Icon name="pencil" />
      </Fab>
    );
  }
}

export default connectStyle('hack.FabButton', styles, FabButton);
