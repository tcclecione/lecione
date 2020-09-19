import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Router from 'navigation';
import { Container, StyleProvider, Root } from 'native-base';

import SplashScreen from 'react-native-splash-screen';
import getTheme from './style/theme/components';
import hack from './style/theme/variables/hack';
import store from './store';

class Master extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <StyleProvider style={getTheme(hack)}>
          <Root>
            <Container>
              <Router />
            </Container>
          </Root>
        </StyleProvider>
      </Provider>
    );
  }
}

export default Master;
