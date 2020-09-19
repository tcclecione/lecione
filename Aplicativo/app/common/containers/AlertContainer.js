import React, { Component } from "react";
import * as actions from "common/actions";
import { connect } from "react-redux";
import { AlertModal } from "common/components";

class AlertContainer extends Component {
  render() {
    return (
      <AlertModal
        visible={this.props.visible}
        text={this.props.text}
        title={this.props.title}
        onRequestClose={() => {
          if (this.props.onRequestClose) {
            this.props.onRequestClose();
          }

          return this.props.hideAlert();
        }}
      />
    );
  }
}

const mapStateToProps = ({ common }) => ({
  title: common.alert.title,
  text: common.alert.text,
  visible: common.alert.visible
});

const mapDispatchToProps = {
  ...actions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlertContainer);
