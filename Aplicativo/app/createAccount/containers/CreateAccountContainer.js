import React, { Component } from 'react';
import { CreateAccountScreen } from 'createAccount/screens';
import { connect } from 'react-redux';
import { drawer } from 'services/navigator';
import { createAccount } from 'createAccount/actions';

class CreateAccountContainer extends Component {
  componentWillUnmount() {
    const { clearFields } = this.props;
    clearFields()
  }

  handlePressMenu = () => {
    drawer.open();
  }

  handlePressSubmit = payload => {
    const { saveAccount, navigation } = this.props;
    saveAccount(payload, navigation)
  }

  handleSearch = value => {
    const { getResponsible } = this.props;
    getResponsible(value)
  }

  render() {
    const { info, isLoading, isResponsible, responsible } = this.props;
    return (
      <CreateAccountScreen
        info={info || {}}
        onPressSubmit={payload => this.handlePressSubmit(payload)}
        onPressMenu={this.handlePressMenu}
        isLoading={isLoading}
        isResponsible={isResponsible}
        responsible={responsible || {}}
        onSearch={value => this.handleSearch(value)}
      />
    );
  }
}

const mapStateToProps = state => ({
  student: state.login.auth.student,
  user: state.login.auth.user.info,
  info: state.createAccount.list.info,
  isLoading: state.createAccount.list.isLoading,
  isResponsible: state.createAccount.list.isResponsible,
  responsible: state.createAccount.list.responsible,
});

const mapDispatchToProps = {
  ...createAccount
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccountContainer);
