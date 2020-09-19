import React, { Component } from 'react';
import { Container, Tabs, Tab } from 'native-base';
import { Header } from 'common/components';
import { BASE_COLOR, BRAND_PRIMARY } from 'style/colors';
import { CardLine, About } from 'complementary/components';
import * as Navigator from 'services/navigator';
import { Loader } from 'common/components'

class ComplementaryScreen extends Component {
  render() {
    const { item, complementaries, about, period, evaluation, isLoading } = this.props;
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
          title={item.name}
          leftIcon="arrow-left"
          onPressLeft={() => Navigator.back()}
          bgColor={BASE_COLOR}
          barColor="light-content"
        />

        <Tabs tabBarUnderlineStyle={{ backgroundColor: BRAND_PRIMARY }}>
          <Tab heading="RELATÓRIOS"
            activeTabStyle={{ borderBottomColor: BRAND_PRIMARY }}
            activeTextStyle={{ color: BRAND_PRIMARY }}
          >
            <CardLine complementaries={complementaries} />
          </Tab>
          <Tab heading="SOBRE"
            activeTabStyle={{ borderBottomColor: BRAND_PRIMARY }}
            activeTextStyle={{ color: BRAND_PRIMARY }}
          >
            <About details={about} period={period} evaluation={evaluation} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default ComplementaryScreen;
