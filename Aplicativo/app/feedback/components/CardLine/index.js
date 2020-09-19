import React, { Component } from 'react';
import connectStyle from 'utils/connectStyle';
import {
  Text,
  Card,
  Left,
  Body,
  Icon,
  Right,
  Content,
  CardItem,
  Thumbnail,
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
        onEndReachedThreshold={0.10}
        contentContainerStyle={list.length ? {} : styles.flatList}
        renderItem={({ item }) => (
          <Content style={styles.content}>
            <Card style={styles.card}>
              <Right>
                <CardItem>
                  <Left>
                    <Thumbnail source={{ uri: item.employee_image }} />
                    <Body>
                      <Text>{item.employee_name}</Text>
                      <Text note>{item.office_employee}</Text>
                    </Body>
                  </Left>
                  <Right>
                    <Icon
                      name={item.feedback_icon}
                      style={[styles.icon, { color: item.feedback_color }]}
                    />
                  </Right>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text
                      style={styles.textDescription}>
                      {item.feedback_description}
                    </Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Right>
                    <Text
                      note
                      style={styles.textDate}>
                      {moment(item.created_at, 'YYYY-MM-DD').format('DD/MM/YYYY')}
                    </Text>
                  </Right>
                </CardItem>
              </Right>
            </Card>
          </Content>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.textListEmpty}>
            Você não tem novos feedbacks...
          </Text>
        )}
      />
    );
  }
}

export default connectStyle('hack.CardLine', styles, CardLine);
