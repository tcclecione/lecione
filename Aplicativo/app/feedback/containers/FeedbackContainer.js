import React, { Component } from 'react';
import { FeedbackScreen } from 'feedback/screens';
import { connect } from 'react-redux';
import { drawer } from 'services/navigator';
import { feedback } from 'feedback/actions';

class FeedbackContainer extends Component {
  componentDidMount() {
    this.props.getFeedbacks(this.props.student.id)
  }

  handlePressMenu = () => {
    drawer.open();
  }

  render() {
    const { listFeedbacks, isLoading } = this.props;
    return (
      <FeedbackScreen
        listFeedbacks={listFeedbacks || []}
        onPressHero={item => this.handlePressHero(item)}
        onPressMenu={this.handlePressMenu}
        isLoading={isLoading}
      />
    );
  }
}

const mapStateToProps = state => ({
  student: state.login.auth.student,
  listFeedbacks: state.feedback.list.list,
  isLoading: state.feedback.list.isLoading
});

const mapDispatchToProps = {
  ...feedback
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackContainer);
