import React, { PureComponent } from 'react';
import {
  Card, CardItem, Body, Text, Row, Button,
} from 'native-base';
import Modal from 'react-native-modal';
import styles from './styles';
import connectStyle from '../../../utils/connectStyle';

class ModalAlert extends PureComponent {
  static defaultProps = {
    title: 'Title',
    children: <Text>render Body</Text>,
    footer: <Text>render Footer</Text>,
    isVisible: false,
    switchVisible: null,
    animationIn: 'fadeIn',
    animationOut: 'fadeOut',
    titleButton: 'Sim',
    onRequestClose: () => {},
    onPress: () => {},
  };

  render() {
    const {
      children,
      title,
      animationIn,
      animationOut,
      onRequestClose,
      isVisible,
      onPress,
      onPressRight,
      titleButton,
      titleButtonRight,
      style,
    } = this.props;

    return (
      <Modal
        {...this.props}
        style={styles.modal}
        isVisible={isVisible}
        onBackdropPress={onRequestClose}
        onBackButtonPress={onRequestClose}
        onRequestClose={onRequestClose}
        backdropOpacity={0.5}
        backdropColor="black"
        animationIn={animationIn}
        animationOut={animationOut}
        animationInTiming={500}
        animationOutTiming={500}
        backdropTransitionInTiming={500}
        backdropTransitionOutTiming={500}
        avoidKeyboard
        useNativeDriver
        hideModalContentWhileAnimating
      >
        <Card style={style}>
          <CardItem header>
            <Text>{title}</Text>
          </CardItem>
          <CardItem>
            <Body>{children}</Body>
          </CardItem>
          {titleButton && (
            <CardItem footer>
              <Row>
                <Button onPress={onPress} gray>
                  <Text>{titleButton}</Text>
                </Button>
                {titleButtonRight && (
                  <Button yellow onPress={onPressRight}>
                    <Text>{titleButtonRight}</Text>
                  </Button>
                )}
              </Row>
            </CardItem>
          )}
        </Card>
      </Modal>
    );
  }
}

export default connectStyle('Mestre.ModalAlert', styles, ModalAlert);
