import React, { Component } from 'react';
import { Container } from 'native-base';
import { Header } from 'common/components';
import { BASE_COLOR } from 'style/colors';
import { CardCollaborator } from 'employees/components';
import { Loader } from 'common/components'
import * as Navigator from 'services/navigator';

class CollaboratorsScreen extends Component {
  render() {
    const { collaborators, isLoading } = this.props;
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
          title="Colaboradores"
          leftIcon="arrow-left"
          onPressLeft={() => Navigator.back()}
          bgColor={BASE_COLOR}
          barColor="light-content"
        />

        <CardCollaborator collaborators={collaborators} />
      </Container>
    );
  }
}

export default CollaboratorsScreen;
