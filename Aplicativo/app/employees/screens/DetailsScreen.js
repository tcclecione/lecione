import React, { Component } from 'react';
import { Container, Tabs, Tab } from 'native-base';
import { Header } from 'common/components';
import { Head, TabProfile, TabContact } from 'employees/components';
import { Loader } from 'common/components'
import { BASE_COLOR, BRAND_PRIMARY } from 'style/colors';
import * as Navigator from 'services/navigator';

class DetailsScreen extends Component {
  render() {
    const { details, isLoading } = this.props;
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
          title={details.name}
          leftIcon="arrow-left"
          onPressLeft={() => Navigator.back()}
          bgColor={BASE_COLOR}
          barColor="light-content"
        />
        <Head details={details} />
        <Tabs tabBarUnderlineStyle={{ backgroundColor: BRAND_PRIMARY }}>
          <Tab heading="SOBRE"
            activeTabStyle={{ borderBottomColor: BRAND_PRIMARY }}
            activeTextStyle={{ color: BRAND_PRIMARY, fontWeight: '300' }}
          >
            <TabProfile details={details} />
          </Tab>
          <Tab heading="CONTATO"
            activeTabStyle={{ borderBottomColor: BRAND_PRIMARY }}
            activeTextStyle={{ color: BRAND_PRIMARY, fontWeight: '300' }}
          >
            <TabContact details={details} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default DetailsScreen;
