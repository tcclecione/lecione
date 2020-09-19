import React, { Component } from 'react';
import SchoolDetailScreen from 'schools/screens/SchoolDetailScreen';
import { connect } from 'react-redux';
import { schools } from 'schools/actions';

class SchoolDetailContainer extends Component {
  componentDidMount() {
    const item = this.props.navigation.getParam('item');
    this.props.getPeriodSchool(item.id);
  }

  render() {
    const item = this.props.navigation.getParam('item');
    const { period } = this.props;
    return (
      <SchoolDetailScreen
        item={item}
        period={period || []}
      />
    );
  }
}

const mapStateToProps = state => ({
  period: state.schools.schools.period,
  isLoading: state.schools.schools.isLoading
});

const mapDispatchToProps = {
  ...schools
};

export default connect(mapStateToProps, mapDispatchToProps)(SchoolDetailContainer);
