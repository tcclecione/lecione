import React, { Component } from 'react';
import { TimelineScreen } from 'timeline/screens';
import { connect } from 'react-redux';
import { getTimeLine } from '../actions/timeline';
import * as actionsLogin from 'login/actions';
import { drawer } from 'services/navigator';

class TimelineContainer extends Component {

  componentDidMount() {
    this.props.getTimeLine(this.props.student.school_id)
  }

  handlePressMenu = () => {
    drawer.open();
  }

  render() {
    const { list, isLoading } = this.props;
    return (
      <TimelineScreen
        list={list || []}
        onPressHero={item => this.handlePressHero(item)}
        onPressMenu={this.handlePressMenu}
        isLoading={isLoading}
      />
    );
  }
}

const mapStateToProps = state => ({
  student: state.login.auth.student,
  list: state.timeline.timeline.list,
  isLoading: state.timeline.timeline.isLoading
});

const mapDispatchToProps = {
  ...actionsLogin,
  getTimeLine,
};

export default connect(mapStateToProps, mapDispatchToProps)(TimelineContainer);
