import React, { Component } from 'react';
import connectStyle from 'utils/connectStyle';
import styles from './styles';
import { Image } from 'react-native';

class TransformImage extends Component {
  transform = (icon) => {
    switch (icon) {
      case 'humanpictos':
        return <Image style={styles.image} source={require('common/images/humanpictos.png')} resizeMode="cover" />
      case 'classroom':
        return <Image style={styles.image} source={require('common/images/classroom.png')} resizeMode="cover" />
      case 'teacher':
        return <Image style={styles.image} source={require('common/images/teacher.png')} resizeMode="cover" />
      case 'businessmen':
        return <Image style={styles.image} source={require('common/images/businessmen.png')} resizeMode="cover" />
      case 'client':
        return <Image style={styles.image} source={require('common/images/client.png')} resizeMode="cover" />
      case 'maid':
        return <Image style={styles.image} source={require('common/images/maid.png')} resizeMode="cover" />
      case 'food':
        return <Image style={styles.image} source={require('common/images/food.png')} resizeMode="cover" />
      case 'workplace':
        return <Image style={styles.image} source={require('common/images/workplace.png')} resizeMode="cover" />
      default:
        return <Image style={styles.image} source={require('common/images/tie.png')} resizeMode="cover" />
    }
  }
  render() {
    const {
      icon
    } = this.props;
    return (
      <>
        {this.transform(icon)}
      </>
    );
  }
}

export default connectStyle('hack.TransformImage', styles, TransformImage);
