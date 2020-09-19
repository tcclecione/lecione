import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'login/actions';
import LoginScreen from 'login/screens/LoginScreen';
import { Toast } from 'native-base';

class LoginContainer extends Component {

  componentDidMount() {
    const { navigation } = this.props;
    const isCreateAccount = navigation.getParam('isCreateAccount');
    if (isCreateAccount) {
      Toast.show({
        text: 'Cadastro realizado com sucesso!',
        duration: 3000,
        type: "success"
      })
    }
  }

  componentWillUnmount() {
    const { clearForm } = this.props;
    clearForm()
  }

  setFormState = field => value => this.props.setValueToState(field, value);

  render() {
    return (
      <LoginScreen
        makeLogin={this.props.makeLogin}
        cpf={this.props.cpf}
        password={this.props.password}
        isLoading={this.props.isLoading}
        forgotModalSetVisibility={this.props.forgotModalSetVisibility}
        setFormState={this.setFormState}
      />
    );
  }
}

const mapStateToProps = state => ({
  cpf: state.login.form.cpf,
  password: state.login.form.senha,
  isLoadingRenew: state.login.auth.isLoadingRenew,
  isLoading: state.login.auth.isLoading,
});

const mapDispatchToProps = {
  ...actions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginContainer);
