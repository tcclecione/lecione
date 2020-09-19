import React, { Component } from 'react';
import { Image } from 'react-native';
import connectStyle from 'utils/connectStyle';
import {
  Content,
  Thumbnail,
} from 'native-base';
import { Text, View } from 'react-native';
import styles from './styles';

const image = "https://image.flaticon.com/icons/png/128/149/149071.png";

class SchoolDetail extends Component {
  render() {
    const { item, period } = this.props;

    return (
      <Content style={styles.content}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.viewContent}>
          <View style={styles.viewImage}>
            {item.icon ?
              <Thumbnail source={{ uri: item.icon }} resizeMode="contain" />
              :
              <Thumbnail source={{ uri: image }} resizeMode="stretch" />
            }
            <View style={styles.viewCity}>
              <Text style={styles.textCity}>{item.name}</Text>
              <Text note>{`${item.city}-${item.state}`}</Text>
            </View>
          </View>
          <Text>{item.description}</Text>
          <Text style={styles.title}>Direfencial</Text>
          <Text>{item.differentials}</Text>
          <Text style={styles.title}>Horários</Text>
          {period && (
            <>
              {period.map((item, i) => {
                return (<Text key={i} style={styles.textPeriod}>{item.period}</Text>)
              })}
            </>
          )}
        </View>
      </Content>
    )
  }
}

export default connectStyle('hack.SchoolDetail', styles, SchoolDetail);
