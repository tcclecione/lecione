import React, { Component } from 'react';
import { EvaluationScreen } from 'evaluation/screens';
import { connect } from 'react-redux';
import { drawer } from 'services/navigator';
import { evaluation } from 'evaluation/actions';

class EvaluationContainer extends Component {
  componentDidMount() {
    const { navigation } = this.props;
    const type_school_id = navigation.getParam('type_school_id');
    const type_id = navigation.getParam('type_id');
    const screen = navigation.getParam('screen');
    this.props.getEvaluations(type_school_id, type_id, screen)
  }

  handlePressMenu = () => {
    drawer.open();
  }

  render() {
    const { list, isLoading, resume } = this.props;
    return (
      <EvaluationScreen
        list={list || []}
        resume={resume}
        onPressHero={item => this.handlePressHero(item)}
        onPressMenu={this.handlePressMenu}
        isLoading={isLoading}
      />
    );
  }
}

const mapStateToProps = state => ({
  student: state.login.auth.student,
  list: state.evaluation.list.list,
  isLoading: state.evaluation.list.isLoading,
  resume: state.evaluation.list.resume,
});

const mapDispatchToProps = {
  ...evaluation
};

export default connect(mapStateToProps, mapDispatchToProps)(EvaluationContainer);
