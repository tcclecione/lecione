import React, { Component } from 'react';
import { Container, Tabs, Tab, TabHeading, Text } from 'native-base';
import { Header } from 'common/components';
import { BASE_COLOR, BRAND_PRIMARY } from 'style/colors';
import { TabProfile, TabStudent } from 'profile/components';
import { Loader } from 'common/components'

class ProfileScreen extends Component {
  render() {
    const { info, onPressMenu, isLoading } = this.props;
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
          title="Perfil"
          leftIcon="menu"
          onPressLeft={() => onPressMenu()}
          bgColor={BASE_COLOR}
          barColor="light-content"
        />

        <Tabs tabBarUnderlineStyle={{ backgroundColor: BRAND_PRIMARY }}>
          <Tab heading="VOCÊ"
            activeTabStyle={{ borderBottomColor: BRAND_PRIMARY }}
            activeTextStyle={{ color: BRAND_PRIMARY }}
          >
            <TabProfile
              responsible={info ? info.responsible : null} />
          </Tab>
          <Tab heading="ALUNO"
            activeTabStyle={{ borderBottomColor: BRAND_PRIMARY }}
            activeTextStyle={{ color: BRAND_PRIMARY }}
          >
            <TabStudent
              student={info ? info.student : null} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default ProfileScreen;
