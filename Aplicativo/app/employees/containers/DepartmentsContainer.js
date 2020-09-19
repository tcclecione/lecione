import React, { Component } from 'react';
import { DepartmentsScreen } from 'employees/screens';
import { connect } from 'react-redux';
import { drawer } from 'services/navigator';
import { employees } from 'employees/actions';

class DepartmentsContainer extends Component {
  componentDidMount() {
    this.props.getDepartments()
  }

  handlePressMenu = () => {
    drawer.open();
  }

  render() {
    const { departments, isLoading } = this.props;
    return (
      <DepartmentsScreen
        departments={departments || []}
        onPressMenu={this.handlePressMenu}
        isLoading={isLoading}
      />
    );
  }
}

const mapStateToProps = state => ({
  departments: state.employees.list.departments,
  isLoading: state.employees.list.isLoading
});

const mapDispatchToProps = {
  ...employees
};

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentsContainer);
