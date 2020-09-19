import React, { Component } from 'react';
import { Container } from 'native-base';
import { Header } from 'common/components';
import SchoolDetail from 'schools/components/SchoolDetail';
import * as Navigator from 'services/navigator';
import { BASE_COLOR } from 'style/colors';

class SchoolDetailScreen extends Component {
  render() {
    const { item, period } = this.props;
    return (
      <Container style={{ backgroundColor: '#22262a' }}>
        <Header
          title="Detalhes"
          leftIcon="arrow-left"
          onPressLeft={() => Navigator.back()}
          bgColor={BASE_COLOR}
          barColor="light-content"
        />
        <SchoolDetail
          item={item}
          period={period}
        />
      </Container>
    );
  }
}

export default SchoolDetailScreen;
