import React, { Component } from 'react';
import connectStyle from 'utils/connectStyle';
import {
  Text, Content, Card, CardItem
} from 'native-base';
import { FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import { navigate } from 'services/navigator';

class CardLine extends Component {
  render() {
    const { complementaries } = this.props;
    return (
      <FlatList
        data={complementaries}
        numColumns={1}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0.10}
        contentContainerStyle={complementaries.length ? {} : styles.flatList}
        renderItem={({ item }) => (
          <Content style={styles.content}>
            <TouchableOpacity onPress={() => navigate('Complementary', { item })}>
              <Card>
                <CardItem>
                  <Text>
                    {item.name}
                  </Text>
                </CardItem>
              </Card>
            </TouchableOpacity>
          </Content>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.textListEmpty}>
            Esta escola não possui cursos complementares...
          </Text>
        )}
      />
    );
  }
}

export default connectStyle('hack.CardLine', styles, CardLine);
