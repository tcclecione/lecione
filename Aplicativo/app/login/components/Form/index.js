import React, { Component } from 'react';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  ActivityIndicator
} from 'react-native';
import {
  Text,
  Icon,
  Label,
  Input,
  Button,
  Content,
  View,
} from 'native-base';

import { reset } from 'services/navigator';
import { Item } from 'common/components';
import styles from './styles';
import { navigate } from 'services/navigator';

class Form extends Component {
  state = {
    showPassword: true,
    iconPassword: 'eye',
    focused: '',
    keyboardState: false
  };

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = () => {
    this.setState({
      keyboardState: true
    });
  }

  _keyboardDidHide = () => {
    this.setState({
      keyboardState: false
    });
  }


  setFocus = focused => () => this.setFocus({ focused });

  showPassword() {
    const { showPassword, iconPassword } = this.state;
    this.setState({
      showPassword: !showPassword,
      iconPassword: iconPassword === 'eye-off' ? 'eye' : 'eye-off',
    });
  }

  render() {
    const { focused, showPassword, iconPassword } = this.state;
    const {
      cpf,
      onChangeCpf,
      onChangePassword,
      password,
      onRequestSend,
      // onPressForgotPassword,
    } = this.props;

    return (
      <Content contentContainerStyle={styles.content}>
        <View style={styles.blockImage}>
          <Image
            style={styles.image}
            source={require('login/images/SPLASH_2.png')}
          />
        </View>
        <View style={styles.block}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.view}>
              <Item
                input
                disableBorderBottom={focused === 'password' || focused === ''}
                floatingLabel
                style={styles.item}
              >
                <Label>CPF</Label>
                <Input
                  autoCapitalize="none"
                  name="cpf"
                  value={cpf}
                  onFocus={this.setFocus('cpf')}
                  onBlur={this.setFocus('')}
                  onChangeText={onChangeCpf}
                />
              </Item>
              <Item
                input
                disableBorderBottom={focused === 'email' || focused === ''}
                floatingLabel
                style={{ marginBottom: 0 }}
              >
                <Label>Senha</Label>
                <Input
                  secureTextEntry={showPassword}
                  name="password"
                  value={password}
                  onChangeText={onChangePassword}
                  onFocus={this.setFocus('password')}
                  onBlur={this.setFocus('')}
                />
              </Item>
              {/* {!this.state.keyboardState && (
                <View style={styles.viewOptionsLogin}>
                  <Text style={styles.text}>
                    Esqueceu sua senha?
                </Text>
                  <Text style={[styles.text, { color: "#cc9d41" }]}>
                    Recuperar aqui
                </Text>
                </View>
              )} */}
              <Button
                style={[styles.button, { backgroundColor: this.props.isLoading ? "#a6a6a6" : "#cc9d41" }]}
                onPress={onRequestSend}
                disabled={this.props.isLoading}
              >
                {!this.props.isLoading ?
                  <Text style={styles.textButton}>Entrar</Text>
                  :
                  <ActivityIndicator size="small" color="#FFF" />
                }
              </Button>
              <View />
              <Button style={styles.button} onPress={() => navigate('Schools')}>
                <Text style={styles.textButton}>Acessar como visitante</Text>
              </Button>
            </View>
          </TouchableWithoutFeedback>
          {!this.state.keyboardState && (
            <View style={{ flexDirection: 'row' }}>
              <Text style={[styles.text, { marginRight: 5 }]}>
                Não tem conta?
            </Text>
              <TouchableWithoutFeedback onPress={() => navigate('CreateAccount')}>
                <Text style={[styles.text, { color: "#cc9d41" }]}>
                  Crie aqui
                </Text>
              </TouchableWithoutFeedback>
            </View>
          )}
        </View>
      </Content >
    );
  }
}

export default Form;
