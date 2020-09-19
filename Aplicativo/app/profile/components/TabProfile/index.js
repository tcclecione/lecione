import React, { Component, Fragment } from 'react';
import connectStyle from 'utils/connectStyle';
import {
  Content,
  Item,
  Label,
  Input,
  Icon,
  Text,
  Button, Fab, View
} from 'native-base';
import styles from './styles';
import { Avatar } from 'common/components'
import { ScrollView, TouchableOpacity } from 'react-native';
import { FabButton } from '../';

class TabProfile extends Component {
  state = {
    info: {
      name: this.props.responsible ? this.props.responsible.name : '',
      cpf: this.props.responsible ? this.props.responsible.cpf : '',
      email: this.props.responsible ? this.props.responsible.email : '',
      phone: this.props.responsible ? this.props.responsible.phone : '',
      street: this.props.responsible ? this.props.responsible.street : '',
      district: this.props.responsible ? this.props.responsible.district : '',
      number: this.props.responsible ? this.props.responsible.number : '',
      occupation: this.props.responsible ? this.props.responsible.occupation : '',
    }
  };

  render() {
    const { responsible } = this.props;
    const { info } = this.state;
    return (
      <Content style={{ backgroundColor: '#22262a' }}>
        <Avatar
          image={responsible ? responsible.image : null}
          name={responsible ? responsible.name : null}
        />
        <ScrollView>
          <Item input floatingLabel style={styles.item}>
            <Label>Nome</Label>
            <Input disabled style={styles.input} value={info.name || ""} />
          </Item>
          <Item input floatingLabel style={styles.item}>
            <Label>CPF</Label>
            <Input disabled style={styles.input} value={info.cpf || ""} />
          </Item>
          <Item input floatingLabel style={styles.item}>
            <Label>E-mail</Label>
            <Input disabled style={styles.input} value={info.email || ""} />
          </Item>
          <Item input floatingLabel style={styles.item}>
            <Label>Telefone</Label>
            <Input disabled style={styles.input} value={info.phone || ""} />
          </Item>
          {/* <Item input floatingLabel style={styles.item}>
            <Label>Endereço</Label>
            <Input disabled style={styles.input} value={`${info.street}, ${info.district}, ${info.number}` || ""} />
          </Item> */}
          <Item input floatingLabel style={styles.item}>
            <Label>Profissão</Label>
            <Input disabled style={styles.input} value={info.occupation || ""} />
          </Item>
        </ScrollView>
        {/* <FabButton /> */}
      </Content>
    );
  }
}

export default connectStyle('hack.TabProfile', styles, TabProfile);
