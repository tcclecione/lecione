import React, { Component } from 'react';
import { Container } from 'native-base';
import { Header } from 'common/components';
import { BASE_COLOR } from 'style/colors';
import { Create } from 'createAccount/components';
import { Loader } from 'common/components'
import * as Navigator from 'services/navigator';

class CreateAccountScreen extends Component {
  render() {
    const {
      onPressMenu,
      isLoading,
      onPressSubmit,
      responsible,
      isResponsible,
      onSearch
    } = this.props;
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
          title="Criar conta"
          leftIcon="arrow-left"
          onPressLeft={() => Navigator.back()}
          bgColor={BASE_COLOR}
          barColor="light-content"
        />
        <Create
          responsible={responsible}
          onPress={payload => onPressSubmit(payload)}
          isResponsible={isResponsible}
          search={value => onSearch(value)}
        />
      </Container>
    );
  }
}

export default CreateAccountScreen;
