import React, { Component } from 'react';
import { ComplementaryScreen } from 'complementary/screens';
import { connect } from 'react-redux';
import { navigate, drawer } from 'services/navigator';
import { complementary } from 'complementary/actions';

class ComplementaryContainer extends Component {
  async componentDidMount() {
    const { navigation, student, getComplementaryDetails, getPeriodsComplementaryType } = this.props;
    const item = navigation.getParam('item');
    await getComplementaryDetails(
      student.id,
      item.course_type_about_id,
      item.course_type_id,
      item.course_type_school_id
    )
    await getPeriodsComplementaryType(item.course_type_school_id)
  }

  handlePressItem = (item) => {
    const { favorite } = this.props;
    favorite(item);
  }

  handlePressHero = (item) => {
    const { saveHero } = this.props;
    saveHero(item);
    navigate('Detail');
  }

  handlePressMenu = () => {
    drawer.open();
  }

  handlePressMenuClose = () => {
    drawer.close();
  }

  render() {
    const {
      navigation,
      complementaries,
      about,
      period,
      evaluation,
      isLoading
    } = this.props;

    const item = navigation.getParam('item');

    return (
      <ComplementaryScreen
        onPressHero={item => this.handlePressHero(item)}
        onPressMenu={this.handlePressMenu}
        onPressMenuClone={this.handlePressMenuClose}
        item={item}
        about={about || {}}
        complementaries={complementaries || []}
        period={period}
        evaluation={evaluation}
        isLoading={isLoading}
      />
    );
  }
}

const mapStateToProps = state => ({
  student: state.login.auth.student,
  info: state.complementary.list.info,
  isLoading: state.complementary.list.isLoading,
  complementaries: state.complementary.list.detail_complementaries,
  about: state.complementary.list.detail_about,
  period: state.complementary.list.period,
  evaluation: state.complementary.list.evaluation
});

const mapDispatchToProps = {
  ...complementary
};

export default connect(mapStateToProps, mapDispatchToProps)(ComplementaryContainer);
