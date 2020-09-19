import React, { Component } from 'react';
import { ProfileScreen } from 'profile/screens';
import { connect } from 'react-redux';
import { drawer } from 'services/navigator';
import { profile } from 'profile/actions';

class ProfileContainer extends Component {
  componentDidMount() {
    const { student, user } = this.props;
    this.props.getProfile(user.cpf, student.id)
  }

  handlePressMenu = () => {
    drawer.open();
  }

  render() {
    const { info, isLoading } = this.props;
    return (
      <ProfileScreen
        info={info || {}}
        onPressHero={item => this.handlePressHero(item)}
        onPressMenu={this.handlePressMenu}
        isLoading={isLoading}
      />
    );
  }
}

const mapStateToProps = state => ({
  student: state.login.auth.student,
  user: state.login.auth.user.info,
  info: state.profile.list.info,
  isLoading: state.profile.list.isLoading
});

const mapDispatchToProps = {
  ...profile
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
