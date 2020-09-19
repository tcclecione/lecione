import React, { Component } from 'react';
import connectStyle from 'utils/connectStyle';
import {
  Content,
  Item,
  Label,
  Input,
  Icon,
} from 'native-base';
import styles from './styles';
import { Linking } from 'react-native'
class FormContact extends Component {
  render() {
    const { info } = this.props;
    return (
      <Content>
        <Item input floatingLabel style={styles.item}>
          <Label>E-mail</Label>
          <Input style={styles.input} value={info.email} />
          <Icon name='email' style={styles.icon} onPress={() => Linking.openURL(`mailto:${info.email}`)} />
        </Item>
        <Item input floatingLabel style={styles.item}>
          <Label>Telefone</Label>
          <Input style={styles.input} value={info.phone} />
          <Icon name='phone' style={styles.icon} onPress={() => Linking.openURL(`tel:${info.phone}`)} />
        </Item>
        {info.phone_whatsapp && (
          <Item input floatingLabel style={styles.item}>
            <Label>Whatsapp</Label>
            <Input style={styles.input} value={info.phone_whatsapp} />
            <Icon name='whatsapp' style={styles.icon_whatsapp} onPress={() => Linking.openURL(`https://api.whatsapp.com/send?phone=+55${info.phone_whatsapp}`)} />
          </Item>
        )}
      </Content>
    );
  }
}

export default connectStyle('hack.FormContact', styles, FormContact);
