import React, { Component } from 'react';
import { StudentsScreen } from 'students/screens';
import { connect } from 'react-redux';
import { navigate } from 'services/navigator';
import { students } from 'students/actions';
import * as actions from 'login/actions';

class StudentsContainer extends Component {
  componentDidMount() {
    this.props.listStudents(this.props.user.cpf);
  }

  handlePressItem = (item) => {
    const { setStudent } = this.props;
    setStudent(item);
    navigate('DrawerNavigator');
  }

  render() {
    const { user, list, isLoading, userDefault } = this.props;
    return (
      <StudentsScreen
        user={user || []}
        list={list || []}
        userDefault={userDefault}
        onPressItem={item => this.handlePressItem(item)}
        isLoading={isLoading}
      />
    );
  }
}

const mapStateToProps = state => ({
  user: state.login.auth.user.info,
  list: state.students.students.list,
  isLoading: state.students.students.isLoading,
  userDefault: state.students.students.userDefault,
});

const mapDispatchToProps = {
  ...students,
  ...actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentsContainer);
