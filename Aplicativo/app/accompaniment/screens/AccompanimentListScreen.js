import React, { Component } from 'react';
import { Container } from 'native-base';
import { Header } from 'common/components';
import { BASE_COLOR } from 'style/colors';
import { CardList } from 'accompaniment/components';
import { Loader } from 'common/components'

class AccompanimentListScreen extends Component {
  render() {
    const { accompaniments, onPressMenu, isLoading } = this.props;
    if (isLoading) {
      return (
        <Loader
          bgColor='#22262a'
          color='#FFF'
          size='small'
        />
      )
    }
    return (
      <Container style={{ backgroundColor: '#22262a' }}>
        <Header
          title="Acompanhamentos"
          leftIcon="menu"
          onPressLeft={() => onPressMenu()}
          bgColor={BASE_COLOR}
          barColor="light-content"
        />

        <CardList accompaniments={accompaniments} />
      </Container>
    );
  }
}

export default AccompanimentListScreen;
