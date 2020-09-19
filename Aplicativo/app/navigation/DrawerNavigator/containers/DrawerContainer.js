import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as login from 'login/actions';
import * as timeline from 'timeline/actions';
import { Drawer } from '../components';

class DrawerContainer extends Component {
  handlePressLogout = () => {
    // this.props.logout();
  }

  render() {
    console.log('USER PASSOU', this.props.user)
    return (
      <Drawer
        {...this.props}
        onPressLogout={() => this.handlePressLogout()}
        user={this.props.user}
      />
    );
  }
}

const mapStateToProps = ({ login }) => ({
  user: login.auth.user.info,
});

const mapActionsToProps = {
  ...login,
  ...timeline,
};

export default connect(
  mapStateToProps,
  mapActionsToProps,
)(DrawerContainer);
