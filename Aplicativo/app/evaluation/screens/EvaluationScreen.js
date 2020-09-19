import React, { Component } from 'react';
import { Container } from 'native-base';
import { Header } from 'common/components';
import { BASE_COLOR } from 'style/colors';
import { CardLine } from 'evaluation/components';
import * as Navigator from 'services/navigator';
import { Loader } from 'common/components'

class EvaluationScreen extends Component {
  render() {
    const { list, isLoading, resume } = this.props;
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
          title="Avaliações"
          leftIcon="arrow-left"
          onPressLeft={() => Navigator.back()}
          bgColor={BASE_COLOR}
          barColor="light-content"
        />

        <CardLine list={list} resume={resume} />
      </Container>
    );
  }
}

export default EvaluationScreen;
