import React, { Component } from 'react';
import connectStyle from 'utils/connectStyle';
import {
  Content,
  Item,
  Label,
  Input,
} from 'native-base';
import styles from './styles';
import { Avatar } from 'common/components'
import { ScrollView } from 'react-native';
import moment from 'moment';

class TabStudent extends Component {
  state = {
    info: {
      name: this.props.student ? this.props.student.name : '',
      cpf: this.props.student ? this.props.student.cpf : '',
      sex: this.props.student ? this.props.student.sex : '',
      grade: this.props.student ? this.props.student.grade : 0,
      grade_type: this.props.student ? this.props.student.grade_type : '',
      date_birth: this.props.student ? this.props.student.date_birth : '',
      school_name: this.props.student ? this.props.student.school_name : ''
    }
  };

  render() {
    const { student } = this.props;
    const { info } = this.state;
    return (
      <Content style={{ backgroundColor: '#22262a' }}>
        <Avatar
          image={student ? student.image : null}
          name={student ? student.name : null}
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
            <Label>Sexo</Label>
            <Input disabled style={styles.input} value={info.sex || ""} />
          </Item>
          <Item input floatingLabel style={styles.item}>
            <Label>Turma</Label>
            <Input disabled style={styles.input} value={`${info.grade}` || ''} />
          </Item>
          <Item input floatingLabel style={styles.item}>
            <Label>Serie</Label>
            <Input disabled style={styles.input} value={info.grade_type || ""} />
          </Item>
          <Item input floatingLabel style={styles.item}>
            <Label>Data de nascimento</Label>
            <Input disabled style={styles.input} value={moment(info.date_birth, 'YYYY-MM-DD').format('DD/MM/YYYY') || ""} />
          </Item>
          <Item input floatingLabel style={styles.item}>
            <Label>Escola</Label>
            <Input disabled style={styles.input} value={info.school_name || ""} />
          </Item>
        </ScrollView>
      </Content>
    );
  }
}

export default connectStyle('hack.TabStudent', styles, TabStudent);
