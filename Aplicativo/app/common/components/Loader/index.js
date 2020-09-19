import React, { Component } from 'react';
import {
  Container,
} from 'native-base';
import connectStyle from 'utils/connectStyle';
import styles from './styles';
import { ActivityIndicator } from 'react-native';

class Loader extends Component {
  render() {
    const {
      bgColor,
      color,
      size
    } = this.props;
    return (
      <Container style={[styles.container, { backgroundColor: bgColor }]}>
        <ActivityIndicator size={size} color={color} />
      </Container>
    );
  }
}

export default connectStyle('hack.Loader', styles, Loader);
