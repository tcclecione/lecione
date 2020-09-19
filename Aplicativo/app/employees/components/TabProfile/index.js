import React, { Component } from 'react';
import connectStyle from 'utils/connectStyle';
import {
  Content,
} from 'native-base';
import { View, Text } from 'react-native';
import styles from './styles';

class TabProfile extends Component {
  render() {
    const { details } = this.props;
    return (
      <Content style={styles.content}>
        <View style={styles.container}>
          <Text style={styles.title}>Me conheça</Text>
          <Text style={styles.textAbout}>{details.about}</Text>
        </View>
        <View style={styles.containerSkills}>
          <Text style={styles.title}>Habilidades</Text>
          <View style={styles.contentSkills}>
            {details.skills && (
              <>
                {details.skills.map(item => (
                  <View key={item.id} style={styles.skill}>
                    <Text key={item.id} style={styles.skillText}>{item.name}</Text>
                  </View>
                ))}
              </>
            )}
          </View>
        </View>
      </Content>
    );
  }
}

export default connectStyle('hack.TabProfile', styles, TabProfile);
