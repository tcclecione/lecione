import React, { Component } from 'react';
import SchoolScreen from 'schools/screens/SchoolScreen';
import { connect } from 'react-redux';
import { schools } from 'schools/actions';

class SchoolListContainer extends Component {
  componentDidMount() {
    this.props.getSchools()
  }

  render() {
    const { schools, isLoading } = this.props;
    return (
      <SchoolScreen
        schools={schools || []}
        isLoading={isLoading}
      />
    );
  }
}

const mapStateToProps = state => ({
  schools: state.schools.schools.schools,
  isLoading: state.schools.schools.isLoading
});

const mapDispatchToProps = {
  ...schools
};

export default connect(mapStateToProps, mapDispatchToProps)(SchoolListContainer);
