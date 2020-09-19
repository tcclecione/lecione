import React, { Component } from 'react';
import { ContactScreen } from 'contact/screens';
import { connect } from 'react-redux';
import { drawer } from 'services/navigator';
import { contact } from 'contact/actions';

class ContactContainer extends Component {
  componentDidMount() {
    this.props.getContact(this.props.student.school_id)
  }

  handlePressMenu = () => {
    drawer.open();
  }

  render() {
    const { school, isLoading } = this.props;
    return (
      <ContactScreen
        info={school || {}}
        onPressHero={item => this.handlePressHero(item)}
        onPressMenu={this.handlePressMenu}
        isLoading={isLoading}
      />
    );
  }
}

const mapStateToProps = state => ({
  student: state.login.auth.student,
  school: state.contact.list.info,
  isLoading: state.contact.list.isLoading
});

const mapDispatchToProps = {
  ...contact
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer);
