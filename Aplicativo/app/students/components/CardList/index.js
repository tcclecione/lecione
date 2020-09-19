import React, { Component } from 'react';
import connectStyle from 'utils/connectStyle';
import {
  Text,
  Card,
  Right,
  Content,
  CardItem,
} from 'native-base';
import { TouchableOpacity, FlatList, Image, View } from 'react-native';
import styles from './styles';

const image = "https://image.flaticon.com/icons/png/128/149/149071.png"

class CardList extends Component {
  render() {
    const { onPress, list } = this.props;
    return (
      <FlatList
        data={list}
        numColumns={1}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0.10}
        renderItem={({ item }) => (
          <Content>
            <TouchableOpacity onPress={() => onPress(item)}>
              <Card style={styles.card}>
                <CardItem cardBody style={{ flexDirection: 'row', justifyContent: 'center' }}>
                  {item.image ?
                    <Image source={{ uri: `${item.image}` }} style={styles.image} />
                    :
                    <Image source={{ uri: `${image}` }} style={styles.imageComputer} resizeMode="stretch" />
                  }
                </CardItem>
                <CardItem style={styles.cardItem}>
                  <View style={styles.containerItem}>
                    <Text style={styles.textItem}>{item.name}</Text>
                    <Text style={styles.textSecondaryItem}>Escola: {item.school_name}</Text>
                  </View>
                  <Right style={styles.rightItem}>
                    <Text style={styles.textItem}>{`${item.grade}º ${item.grade_type}`}</Text>
                  </Right>
                </CardItem>
              </Card>
            </TouchableOpacity>
          </Content>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.textListEmpty}>
            Você não possui alunos, Entre com nosso aluno teste...
          </Text>
        )}
      />
    );
  }
}

export default connectStyle('hack.CardList', styles, CardList);
