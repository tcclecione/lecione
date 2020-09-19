import React, { Component } from 'react';
import { Container } from 'native-base';
import { Header } from 'common/components';
import { BASE_COLOR } from 'style/colors';
import { ListDiscipline } from 'disciplines/components';
import { Loader } from 'common/components'

class DisciplinesScreen extends Component {
  render() {
    const { disciplines, onPressMenu, isLoading } = this.props;
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
          title="Grade Curricular"
          leftIcon="menu"
          onPressLeft={() => onPressMenu()}
          bgColor={BASE_COLOR}
          barColor="light-content"
        />

        <ListDiscipline disciplines={disciplines} />
      </Container>
    );
  }
}

export default DisciplinesScreen;
