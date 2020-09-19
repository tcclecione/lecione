import React, { Component } from 'react';
import { Container } from 'native-base';
import { Header } from 'common/components';
import { BASE_COLOR } from 'style/colors';
import { CardList } from 'complementary/components';
import { Loader } from 'common/components'

class ComplementaryListScreen extends Component {
  render() {
    const { complementaries, onPressMenu, isLoading } = this.props;
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
          title="Cursos Complementares"
          leftIcon="menu"
          onPressLeft={() => onPressMenu()}
          bgColor={BASE_COLOR}
          barColor="light-content"
        />

        <CardList complementaries={complementaries} />
      </Container>
    );
  }
}

export default ComplementaryListScreen;
