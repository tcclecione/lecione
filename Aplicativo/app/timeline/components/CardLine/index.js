import React, { Component } from 'react';
import connectStyle from 'utils/connectStyle';
import {
  Text,
  Card,
  Left,
  Body,
  Right,
  Content,
  CardItem,
  Thumbnail
} from 'native-base';
import { FlatList } from 'react-native';
import styles from './styles';
import moment from 'moment';

class CardLine extends Component {
  render() {
    const { list } = this.props;
    return (
      <FlatList
        data={list}
        numColumns={1}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={list.length ? {} : styles.flatList}
        onEndReachedThreshold={0.10}
        renderItem={({ item }) => (
          <Content style={styles.content}>
            <Card style={styles.card}>
              <Right>
                <CardItem>
                  <Left>
                    <Thumbnail source={{ uri: item.image }} />
                    <Body>
                      <Text>{item.name}</Text>
                      <Text note>{item.office_employee}</Text>
                    </Body>
                  </Left>
                  <Right>
                    <Text
                      style={[styles.textLabel, { backgroundColor: item.classroom_id ? '#58aafb' : '#ffb157' }]}>
                      {item.classroom_id ? 'Turma' : 'Geral'}
                    </Text>
                  </Right>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text style={styles.textPost}>{item.post}</Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Right>
                    <Text note style={styles.textDate}>{moment(item.created_at, 'YYYY-MM-DD').format('DD/MM/YYYY')}</Text>
                  </Right>
                </CardItem>
              </Right>
            </Card>
          </Content>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.textListEmpty}>
            Você não tem novos avisos...
          </Text>
        )}
      />
    );
  }
}

export default connectStyle('hack.CardLine', styles, CardLine);
