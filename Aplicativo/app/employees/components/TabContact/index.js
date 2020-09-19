import React, { Component } from 'react';
import connectStyle from 'utils/connectStyle';
import {
  Content,
  Item,
  Label,
  Input,
  Icon
} from 'native-base';
import styles from './styles';
import { Linking } from 'react-native'

class TabContact extends Component {
  render() {
    const { details } = this.props;
    return (
      <Content style={styles.content}>
        <Item input floatingLabel style={styles.item}>
          <Label>E-mail</Label>
          <Input disabled style={styles.input} value={details.email} />
          <Icon name='email' style={styles.icon} onPress={() => Linking.openURL(`mailto:${details.email}`)} />
        </Item>
        <Item input floatingLabel style={styles.item}>
          <Label>Telefone</Label>
          <Input disabled style={styles.input} value={details.phone} />
          <Icon name='phone' style={styles.icon} onPress={() => Linking.openURL(`tel:${details.phone}`)} />
        </Item>
      </Content>
    );
  }
}

export default connectStyle('hack.TabContact', styles, TabContact);
