import React, { Component } from 'react';
import { Container } from 'native-base';
import { TitlePage, CardList } from 'students/components';
import { Header } from 'common/components';
import { BASE_COLOR } from 'style/colors';
import { ActivityIndicator } from 'react-native';

class StudentsScreen extends Component {
  render() {
    const { list, user, userDefault, onPressItem, isLoading } = this.props;
    if (isLoading) {
      return (
        <Container style={{ backgroundColor: '#22262a', flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="small" color="#FFF" />
        </Container>
      )
    }
    return (
      <Container style={{ backgroundColor: '#22262a' }}>
        <Header
          title="Alunos"
          leftIcon="arrow-left"
          bgColor={BASE_COLOR}
          barColor="light-content"
        />

        <TitlePage user={user} userDefault={userDefault} />
        <CardList
          onPress={item => onPressItem(item)}
          list={list}
        />
      </Container>
    );
  }
}

export default StudentsScreen;
