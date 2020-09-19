/* eslint-disable */

import React, { Component } from 'react';
import {
  TouchableOpacity,
  Animated,
  Platform,
  View,
  StyleSheet,
} from 'react-native';
import _ from 'lodash';
import { Input, Label, Thumbnail } from 'native-base';

import { Icon } from 'common/components';
import connectStyle from 'utils/connectStyle';
import computeProps from 'utils/computeProps';
import variables from 'style/theme/variables/platform';
import styles from './styles';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      topAnim: new Animated.Value(18),
      opacAnim: new Animated.Value(1),
    };
  }
  componentDidMount() {
    if (this.props.floatingLabel) {
      if (this.inputProps && this.inputProps.value) {
        this.setState({ isFocused: true });
        this.floatUp(5);
      }
      if (this.inputProps && this.inputProps.getRef) { this.inputProps.getRef(this.inputRef); }
    }
  }
  componentWillReceiveProps(nextProps) {
    const childrenArray = React.Children.toArray(nextProps.children);

    _.remove(childrenArray, (item) => {
      if (item.type.displayName === 'Styled(Input)') {
        this.inputProps = item.props;
        return item;
      }
    });
    if (this.props.floatingLabel) {
      if (this.inputProps && this.inputProps.value) {
        this.setState({ isFocused: true });
        this.floatUp(5);
      }
      if (this.inputProps && this.inputProps.getRef) { this.inputProps.getRef(this.inputRef); }
    }
  }

  floatBack() {
    Animated.timing(this.state.topAnim, {
      toValue: 18,
      duration: 150,
    }).start();
    Animated.timing(this.state.opacAnim, {
      toValue: 1,
      duration: 150,
    }).start();
  }

  floatUp(e) {
    Animated.timing(this.state.topAnim, {
      toValue: e || -22,
      duration: 150,
    }).start();
    Animated.timing(this.state.opacAnim, {
      toValue: 0.7,
      duration: 150,
    }).start();
  }

  renderLabel(label, labelProps) {
    const newLabel = [];
    const labelStyle = StyleSheet.flatten(
      { fontSize: 15, lineHeight: 30 },
      labelProps.style,
    );
    if (this.props.floatingLabel) {
      if (this.state.isFocused) {
        newLabel.push(React.createElement(Label, {
          ...labelProps,
          key: 'newFLabel',
          float: true,
          style: labelProps.style,
        }));
        this.floatUp(5);
      } else {
        newLabel.push(label);
        this.floatBack();
      }
    } else {
      newLabel.push(React.createElement(Label, {
        ...labelProps,
        key: 'newLabel',
      }));
    }
    return newLabel;
  }

  renderChildren() {
    const newChildren = [];
    const childrenArray = React.Children.toArray(this.props.children);

    let label = [];
    let labelProps = {};
    label = _.remove(childrenArray, (item) => {
      if (item.type === Label) {
        labelProps = item.props;
        return item;
      }
    });

    let input = [];
    let inputProps = {};
    input = _.remove(childrenArray, (item) => {
      if (item.type === Input) {
        inputProps = item.props;
        this.inputProps = item.props;
        return item;
      }
    });

    let icon = [];
    let iconProps = {};
    icon = _.remove(childrenArray, (item) => {
      if (item.type === Icon) {
        iconProps = item.props;
        return item;
      }
    });

    let image = [];
    let imageProps = {};
    image = _.remove(childrenArray, (item) => {
      if (item.type === Thumbnail) {
        imageProps = item.props;
        return item;
      }
    });
    if (this.props.floatingLabel && icon.length) {
      let isIcon = false;
      for (let i = 0; i < this.props.children.length; i++) {
        if (this.props.children[i].props.name && this.props.children[i].type.displayName !== 'Styled(Input)') {
          isIcon = true;
          newChildren.push(<Icon key={[i]} {...this.props.children[i].props} />);
        }

        if (this.props.children[i].props.children) {
          newChildren.push(<Animated.View
            key="float"
            style={{
              position: 'absolute',
              left:
                this.props.last && isIcon
                  ? 40
                  : this.props.last
                    ? 15
                    : isIcon
                      ? 26
                      : 0,
              right: 0,
              top: this.state.topAnim,
              opacity: this.state.opacAnim,
              paddingTop: Platform.OS === 'ios' ? undefined : undefined,
              paddingBottom: Platform.OS === 'ios' ? undefined : 12,
            }}
          >
            <Label {...labelProps}>
              {this.renderLabel(label, labelProps)}
            </Label>
          </Animated.View>);
          newChildren.push(<Input
            ref={c => (this.inputRef = c)}
            key="l2"
            {...inputProps}
            onFocus={() => {
              this.setState({ isFocused: true });
              inputProps.onFocus && inputProps.onFocus();
            }}
            onBlur={() => {
              inputProps.value
                ? this.setState({
                  isFocused: true,
                })
                : !this.state.text.length &&
                this.setState({ isFocused: false });
              inputProps.onBlur && inputProps.onBlur();
            }}
            onChangeText={(text) => {
              this.setState({ text });
              inputProps.onChangeText && inputProps.onChangeText(text);
            }}
          />);
        }
      }
    } else if (this.props.floatingLabel && image.length) {
      let isImage = false;
      for (let i = 0; i < this.props.children.length; i++) {
        if (this.props.children[i].type.displayName === 'Styled(Thumbnail)') {
          isImage = true;
          newChildren.push(<Thumbnail
            small
            key={[i]}
            {...this.props.children[i].props}
            style={{
              right: 10,
              left: (i == this.props.children.length - 1)
                ? undefined
                : 0,
            }}
          />);
        }
        if (this.props.children[i].props.children) {
          newChildren.push(<Animated.View
            key="float"
            style={{
              position: 'absolute',
              left:
                this.props.last && isImage
                  ? 57
                  : this.props.last
                    ? 15
                    : isImage
                      ? 42
                      : 0,
              right: 0,
              top: this.state.topAnim,
              opacity: this.state.opacAnim,
              paddingTop: Platform.OS === 'ios' ? undefined : undefined,
              paddingBottom: Platform.OS === 'ios' ? undefined : 12,
            }}
          >
            <Label {...labelProps}>
              {this.renderLabel(label, labelProps)}
            </Label>
          </Animated.View>);
          newChildren.push(<Input
            ref={c => (this.inputRef = c)}
            key="l2"
            {...inputProps}
            onFocus={() => {
              this.setState({ isFocused: true });
              inputProps.onFocus && inputProps.onFocus();
            }}
            onBlur={() => {
              inputProps.value
                ? this.setState({
                  isFocused: true,
                })
                : !this.state.text.length &&
                this.setState({ isFocused: false });
              inputProps.onBlur && inputProps.onBlur();
            }}
            onChangeText={(text) => {
              this.setState({ text });
              inputProps.onChangeText && inputProps.onChangeText(text);
            }}
            style={{
              left: this.props.last && isImage
                ? 10
                : this.props.last
                  ? 4
                  : isImage
                    ? 10
                    : 0,
              marginRight: 12,
            }}
          />);
        }
      }
    } else if (this.props.floatingLabel) {
      newChildren.push(<Animated.View
        key="float"
        style={{
          position: 'absolute',
          left: this.props.last ? 15 : 0,
          right: 0,
          top: this.state.topAnim,
          opacity: this.state.opacAnim,
          paddingTop: Platform.OS === 'ios' ? undefined : undefined,
          paddingBottom: Platform.OS === 'ios' ? undefined : 12,
        }}
      >
        <Label {...labelProps}>{this.renderLabel(label, labelProps)}</Label>
      </Animated.View>);
        newChildren.push(<Input
          disabled={this.props.disabled}
          ref={c => (this.inputRef = c)}
          value={this.state.text}
          key="l2"
          {...inputProps}
          onFocus={() => {
            this.setState({ isFocused: true });
            inputProps.onFocus && inputProps.onFocus();
          }}
          onBlur={() => {
            inputProps.value
              ? this.setState({
                isFocused: true,
              })
              : !this.state.text.length && this.setState({ isFocused: false });
            inputProps.onBlur && inputProps.onBlur();
          }}
          onChangeText={(text) => {
            this.setState({ text });
            inputProps.onChangeText && inputProps.onChangeText(text);
          }}
        />);

    } else if (this.props.stackedLabel && icon.length) {
      newChildren.push(<View
        key="s"
        style={{
          flexDirection: 'row',
          flex: 1,
          width: variables.deviceWidth - 15,
        }}
      >
        <Icon key="s1" {...iconProps} />
        <View style={{ flexDirection: 'column' }}>
          <Label key="s2" {...labelProps} />
          <Input
            key="s3"
            {...inputProps}
            style={{ width: variables.deviceWidth - 40 }}
          />
        </View>
      </View>);
    } else {
      return this.props.children;
    }
    return newChildren;
  }
  getInitialStyle() {
    return {
      roundedInputGroup: {
        borderWidth: this.props.rounded ? variables.borderWidth * 2 : undefined,
        borderRadius: this.props.rounded
          ? variables.inputGroupRoundedBorderRadius
          : undefined,
      },
    };
  }

  prepareRootProps() {
    const defaultProps = {
      style: this.getInitialStyle().roundedInputGroup,
    };

    return computeProps(this.props, defaultProps);
  }
  render() {
    return (
      <TouchableOpacity
        ref={(button) => {
          this._root = button;
        }}
        {...this.prepareRootProps()}
        activeOpacity={1}
      >
        {this.renderChildren()}
      </TouchableOpacity>
    );
  }
}

const StyledItem = connectStyle('Minerva.Item', styles, Item);

export default StyledItem;
