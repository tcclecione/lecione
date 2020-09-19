import React, { Component } from 'react';
import connectStyle from 'utils/connectStyle';
import { Image, View, Text } from 'react-native';
import styles from './styles';
import { FormContact } from '../'

class Head extends Component {
  render() {
    const { info } = this.props;
    return (
      <>
        <Image source={{ uri: info.image }} style={styles.image} />
        <View style={styles.contentTitle}>
          <Text style={styles.title}>{info.name}</Text>
          <Text style={styles.subTitle}>
            {info.street}-{info.district}, {info.city}-{info.state}, {info.postal_code}`
          </Text>
        </View>
        <FormContact info={info} />
      </>
    );
  }
}

export default connectStyle('hack.Head', styles, Head);
