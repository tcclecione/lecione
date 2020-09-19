import React, { Component } from 'react';
import { Image, TouchableOpacity, FlatList } from 'react-native';
import connectStyle from 'utils/connectStyle';
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
} from 'native-base';
import styles from './styles';
import { navigate } from 'services/navigator';

const image = "https://image.flaticon.com/icons/png/128/149/149071.png";

class CardSchool extends Component {
  render() {
    const { schools } = this.props;
    return (
      <FlatList
        data={schools}
        numColumns={1}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0.10}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigate('SchoolDetail', { item: item })}>
            <Card style={styles.card}>
              <CardItem>
                <Left>
                  {item.icon ?
                    <Thumbnail source={{ uri: item.icon }} resizeMode="contain" />
                    :
                    <Thumbnail source={{ uri: image }} resizeMode="stretch" />
                  }
                  <Body>
                    <Text>{item.name}</Text>
                    <Text note>{`${item.city}-${item.state}`}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody style={styles.cardItem}>
                {item.image ?
                  <Image source={{ uri: `${item.image}` }} style={styles.image} />
                  :
                  <Image source={{ uri: `${image}` }} style={styles.imageComputer} resizeMode="stretch" />
                }
              </CardItem>
              <CardItem cardBody>
                <Text note numberOfLines={2} style={{
                  padding: 10
                }}>
                  {item.description}
                </Text>
              </CardItem>
            </Card>
          </TouchableOpacity>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.textListEmpty}>
            Não possuimos escolas cadastradas neste momento.
          </Text>
        )}
      />
    );
  }
}

export default connectStyle('hack.CardSchool', styles, CardSchool);
