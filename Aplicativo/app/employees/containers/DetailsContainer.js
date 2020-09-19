import React, { Component } from 'react';
import { DetailsScreen } from 'employees/screens';
import { connect } from 'react-redux';
import { employees } from 'employees/actions';

class DetailsContainer extends Component {
  componentDidMount() {
    const { navigation, getDetails } = this.props
    const id = navigation.getParam('id');
    getDetails(id)
  }


  render() {
    const { details, isLoading } = this.props;
    return (
      <DetailsScreen
        details={details || []}
        isLoading={isLoading}
      />
    );
  }
}

const mapStateToProps = state => ({
  details: state.employees.list.details,
  isLoading: state.employees.list.isLoading
});

const mapDispatchToProps = {
  ...employees
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer);
