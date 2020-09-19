import React, { Component } from 'react';
import connectStyle from 'utils/connectStyle';
import {
  Text,
} from 'native-base';
import styles from './styles';

class TitlePage extends Component {
  render() {
    const { user, userDefault } = this.props;
    return (
      <>
        {userDefault ?
          <>
            <Text style={styles.title}>
              Bem vindo, {user.name}!
            </Text>
            <Text style={styles.subTitle}>
              Utilize nosso aluno abaixo para navegar e conhecer o Lecione!
            </Text>
          </>
          :
          <>
            <Text style={styles.title}>
              Bem vindo, {user.name}!
            </Text>
            <Text style={styles.subTitle}>
              Selecione o aluno abaixo que deseja visualizar os detalhes
            </Text>
          </>
        }
      </>
    );
  }
}

export default connectStyle('hack.TitlePage', styles, TitlePage);
