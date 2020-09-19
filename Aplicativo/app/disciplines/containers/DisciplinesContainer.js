import React, { Component } from 'react';
import { DisciplinesScreen } from 'disciplines/screens';
import { connect } from 'react-redux';
import { drawer } from 'services/navigator';
import { disciplines } from 'disciplines/actions';

class DisciplinesContainer extends Component {
  componentDidMount() {
    this.props.getDisciplines(this.props.student.classroom_id)
  }

  handlePressMenu = () => {
    drawer.open();
  }

  render() {
    const { disciplines, isLoading } = this.props;
    return (
      <DisciplinesScreen
        disciplines={disciplines || []}
        onPressMenu={this.handlePressMenu}
        isLoading={isLoading}
      />
    );
  }
}

const mapStateToProps = state => ({
  student: state.login.auth.student,
  disciplines: state.disciplines.list.list,
  isLoading: state.disciplines.list.isLoading
});

const mapDispatchToProps = {
  ...disciplines
};

export default connect(mapStateToProps, mapDispatchToProps)(DisciplinesContainer);
