import React, { Component } from 'react';
import { Body, Button, Title, Text, Left, Right, View } from 'native-base';
import Modal from 'react-native-modal';
import connectStyle from 'utils/connectStyle';
import computeProps from 'utils/computeProps';

import styles from './styles';

class AlertModal extends Component {
  render() {
    const { style } = computeProps(this.props);

    return (
      <Modal
        isVisible={this.props.visible}
        style={style}
        backdropOpacity={0.5}
        backdropColor='black'
        animationIn='fadeIn'
        animationOut='fadeOut'
        animationInTiming={500}
        animationOutTiming={500}
        backdropTransitionInTiming={500}
        backdropTransitionOutTiming={500}
        onRequestClose={this.props.onRequestClose}
        onBackdropPress={this.props.onRequestClose}
        avoidKeyboard
        useNativeDriver
      >
        <Body>
          <Left>
            <Title>{this.props.title}</Title>
          </Left>
          <Right>
            <Text>{this.props.text}</Text>
          </Right>
          <View>
            <Button onPress={this.props.onRequestClose}>
              <Text uppercase>OK</Text>
            </Button>
          </View>
        </Body>
      </Modal>
    );
  }
}

export default connectStyle('Mazza.AlertModal', styles, AlertModal);
