import React, { Component } from 'react';
import { CollaboratorsScreen } from 'employees/screens';
import { connect } from 'react-redux';
import { employees } from 'employees/actions';

class CollaboratorsContainer extends Component {
  componentDidMount() {
    const { navigation, student, getCollaborators } = this.props
    const id = navigation.getParam('id');
    getCollaborators(id, student.school_id)
  }

  render() {
    const { collaborators, isLoading } = this.props;
    return (
      <CollaboratorsScreen
        collaborators={collaborators || []}
        isLoading={isLoading}
      />
    );
  }
}

const mapStateToProps = state => ({
  student: state.login.auth.student,
  collaborators: state.employees.list.collaborators,
  isLoading: state.employees.list.isLoading
});

const mapDispatchToProps = {
  ...employees
};

export default connect(mapStateToProps, mapDispatchToProps)(CollaboratorsContainer);
