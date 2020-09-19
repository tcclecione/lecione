import React, { Component } from 'react';
import { AccompanimentScreen } from 'accompaniment/screens';
import { connect } from 'react-redux';
import { accompaniment } from 'accompaniment/actions';

class AccompanimentContainer extends Component {
  async componentDidMount() {
    const { navigation, student, getAccompanimentDetails, getPeriodsMonitoringType } = this.props;
    const item = navigation.getParam('item');
    await getAccompanimentDetails(
      student.id,
      item.monitoring_type_about_id,
      item.monitoring_type_id,
      item.monitoring_type_school_id
    )
    await getPeriodsMonitoringType(item.monitoring_type_school_id)
  }

  render() {
    const {
      navigation,
      monitorings,
      about,
      period,
      evaluation,
      isLoading
    } = this.props;

    const item = navigation.getParam('item');

    return (
      <AccompanimentScreen
        item={item}
        about={about || {}}
        monitorings={monitorings || []}
        period={period}
        evaluation={evaluation}
        isLoading={isLoading}
      />
    );
  }
}

const mapStateToProps = state => ({
  student: state.login.auth.student,
  info: state.accompaniment.list.info,
  isLoading: state.accompaniment.list.isLoading,
  monitorings: state.accompaniment.list.detail_monitorings,
  about: state.accompaniment.list.detail_about,
  period: state.accompaniment.list.period,
  evaluation: state.accompaniment.list.evaluation
});

const mapDispatchToProps = {
  ...accompaniment
};

export default connect(mapStateToProps, mapDispatchToProps)(AccompanimentContainer);
