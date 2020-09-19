import React, { Component } from 'react';
import { ComplementaryListScreen } from 'complementary/screens';
import { connect } from 'react-redux';
import { navigate, drawer } from 'services/navigator';
import { complementary } from 'complementary/actions';

class ComplementaryListContainer extends Component {
  componentDidMount() {
    const { student } = this.props;
    this.props.getComplementaries(student.school_id)
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

  render() {
    const { info, isLoading } = this.props;
    return (
      <ComplementaryListScreen
        complementaries={info || []}
        onPressHero={item => this.handlePressHero(item)}
        onPressMenu={this.handlePressMenu}
        isLoading={isLoading}
      />
    );
  }
}

const mapStateToProps = state => ({
  student: state.login.auth.student,
  info: state.complementary.list.info,
  isLoading: state.complementary.list.isLoading
});

const mapDispatchToProps = {
  ...complementary
};

export default connect(mapStateToProps, mapDispatchToProps)(ComplementaryListContainer);
