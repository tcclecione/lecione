import React, { Component } from 'react';
import { AccompanimentListScreen } from 'accompaniment/screens';
import { connect } from 'react-redux';
import { drawer } from 'services/navigator';
import { accompaniment } from 'accompaniment/actions';

class AccompanimentListContainer extends Component {
  componentDidMount() {
    const { student } = this.props;
    this.props.getAccompaniments(student.school_id)
  }

  handlePressMenu = () => {
    drawer.open();
  }

  render() {
    const { info, isLoading } = this.props;
    return (
      <AccompanimentListScreen
        accompaniments={info || []}
        onPressMenu={this.handlePressMenu}
        isLoading={isLoading}
      />
    );
  }
}

const mapStateToProps = state => ({
  student: state.login.auth.student,
  info: state.accompaniment.list.info,
  isLoading: state.accompaniment.list.isLoading
});

const mapDispatchToProps = {
  ...accompaniment
};

export default connect(mapStateToProps, mapDispatchToProps)(AccompanimentListContainer);
