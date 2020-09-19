import React, { Component } from 'react';
import Form from 'login/components/Form';

class Login extends Component {
  render() {

    return (
      <>
        <Form
          cpf={this.props.cpf}
          password={this.props.password}
          onChangeCpf={this.props.setFormState('cpf')}
          onChangePassword={this.props.setFormState('password')}
          onRequestSend={() => this.props.makeLogin()}
          onPressForgotPassword={() => {
            this.props.forgotModalSetVisibility(true);
          }}
          isLoading={this.props.isLoading}
        />
      </>
    );
  }
}

export default Login;
