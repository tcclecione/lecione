import React, { Component } from 'react';
import connectStyle from 'utils/connectStyle';
import {
  Text,
  Card,
  Left,
  Content,
  CardItem,
} from 'native-base';
import { FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import { TransformImage } from 'common/components'
import { navigate } from 'services/navigator';

class CardDepartment extends Component {
  render() {
    const { departments } = this.props;
    return (
      <FlatList
        data={departments}
        numColumns={1}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0.10}
        contentContainerStyle={departments.length ? {} : styles.flatList}
        renderItem={({ item }) => (
          <Content style={styles.content}>
            <TouchableOpacity onPress={() => navigate('Collaborators', { id: item.id })}>
              <Card style={styles.card} >
                <CardItem>
                  <Left>
                    <TransformImage icon={item.icon} />
                    <Text style={styles.textCard}>{item.name}</Text>
                  </Left>
                </CardItem>
              </Card>
            </TouchableOpacity>
          </Content>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.textListEmpty}>
            Esta escola ainda não possui departamentos...
          </Text>
        )}
      />
    );
  }
}

export default connectStyle('hack.CardDepartment', styles, CardDepartment);
