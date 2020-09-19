import React, { Component } from 'react';
import { Container } from 'native-base';
import { Header } from 'common/components';
import { BASE_COLOR } from 'style/colors';
import { CardDepartment } from 'employees/components';
import { Loader } from 'common/components'

class DepartmentsScreen extends Component {
  render() {
    const { departments, onPressMenu, isLoading } = this.props;
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
          title="Departamentos"
          leftIcon="menu"
          onPressLeft={() => onPressMenu()}
          bgColor={BASE_COLOR}
          barColor="light-content"
        />

        <CardDepartment departments={departments} />
      </Container>
    );
  }
}

export default DepartmentsScreen;
