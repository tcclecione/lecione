import React, { Component } from 'react';
import { Container } from 'native-base';
import { Header } from 'common/components';
import CardSchool from 'schools/components/CardSchool';
import * as Navigator from 'services/navigator';
import { BASE_COLOR } from 'style/colors';
import { Loader } from 'common/components'

class SchoolScreen extends Component {
  render() {
    const { schools, isLoading } = this.props;
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
          title="Instituições"
          leftIcon="arrow-left"
          onPressLeft={() => Navigator.back()}
          bgColor={BASE_COLOR}
          barColor="light-content" />

        <CardSchool
          schools={schools}
        />
      </Container>
    );
  }
}

export default SchoolScreen;
