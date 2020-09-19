import React, { Component } from 'react';
import {
  View,
  Text,
} from 'native-base';
import connectStyle from 'utils/connectStyle';
import styles from './style';
import { Image } from 'react-native'


class Avatar extends Component {
  render() {
    const {
      image,
      name,
    } = this.props;
    return (
      <>
        {image ?
          <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
          :
          <View style={[styles.avatar, styles]}>
            <Text style={styles.textAvatar}>{name ? name.charAt(0).toUpperCase() : 'A'}</Text>
          </View>
        }
      </>
    );
  }
}


export default connectStyle('hack.Avatar', styles, Avatar);
