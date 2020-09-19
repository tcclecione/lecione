import React, { Component } from 'react';
import connectStyle from 'utils/connectStyle';
import {
  Text, View
} from 'native-base';
import styles from './styles';

class CardDay extends Component {
  render() {
    const { day } = this.props
    return (
      <View style={styles.content}>
        <Text style={styles.textDay}>{day}</Text>
      </View>
    );
  }
}

export default connectStyle('hack.CardDay', styles, CardDay);
