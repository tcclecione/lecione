import React, { Component } from 'react';
import connectStyle from 'utils/connectStyle';
import {
  Text,
  Card,
  Left,
  Body,
  Content,
  CardItem,
  Thumbnail
} from 'native-base';
import { FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import { navigate } from 'services/navigator';
const image = "https://image.flaticon.com/icons/png/128/149/149071.png"

class CardCollaborator extends Component {
  render() {
    const { collaborators } = this.props;
    return (
      <FlatList
        data={collaborators}
        numColumns={1}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={collaborators.length ? {} : styles.flatList}
        onEndReachedThreshold={0.10}
        renderItem={({ item }) => (
          <Content style={styles.content}>
            <TouchableOpacity onPress={() => navigate('CollaboratorDetails', { id: item.id })}>
              <Card>
                <CardItem>
                  <Left>
                    <Thumbnail source={{ uri: item.image || image }} />
                    <Body>
                      <Text>{item.name}</Text>
                      <Text note>{item.office_name}</Text>
                    </Body>
                  </Left>
                </CardItem>
              </Card>
            </TouchableOpacity>
          </Content>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.textListEmpty}>
            Este departamento não possui colaboradores
          </Text>
        )}
      />
    );
  }
}

export default connectStyle('hack.CardCollaborator', styles, CardCollaborator);
