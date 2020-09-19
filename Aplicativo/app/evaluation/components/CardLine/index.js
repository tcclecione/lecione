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
  View
} from 'native-base';
import { FlatList } from 'react-native';
import styles from './styles';
const image = "https://image.flaticon.com/icons/png/128/149/149071.png"
import moment from 'moment';

class CardLine extends Component {
  listStarCard(number) {
    let arr = [];
    let i = 0
    while (i < number) {
      i++
      arr.push(<Icon name="star" style={styles.iconStar} />)
    }

    return arr
  }

  listStart(number) {
    let arr = [];
    let i = 0
    while (i < Math.round(number)) {
      i++
      arr.push(<Icon name="star" style={styles.iconStar} />)
    }

    return arr
  }

  render() {
    const { list, resume } = this.props;
    return (
      <>
        <View style={styles.container}>
          <Text style={{ fontSize: 49, color: '#FFF' }}>{resume.count ? parseFloat(resume.sum / resume.count).toFixed(1).replace('.', ',') : 0}</Text>
          <View style={{ flexDirection: 'row' }}>
            {this.listStart((resume.sum / resume.count)) || <Text style={styles.textEvaluation}>Seja o primeiro a avaliar</Text>}
          </View>
          <Text style={styles.textCountEvaluation}>{resume.count} Avaliações</Text>
        </View>
        <FlatList
          data={list}
          numColumns={1}
          keyExtractor={(item, index) => index.toString()}
          onEndReachedThreshold={0.10}
          renderItem={({ item }) => (
            <Content style={styles.content}>
              <Card style={styles.card}>
                <Right>
                  <CardItem>
                    <Left>
                      <Thumbnail source={{ uri: item.responsible_image || image }} />
                      <Body>
                        <Text>{item.responsible_name}</Text>
                        <Text note>{item.responsible_occupation}</Text>
                      </Body>
                    </Left>
                    <Right>
                      <View style={styles.contentTextEvaluation}>
                        {this.listStarCard(item.rating)}
                      </View>
                    </Right>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text
                        style={styles.textDescription}>
                        {item.comment}
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
              Não possui avaliações...
            </Text>
          )}
        />
      </>
    );
  }
}

export default connectStyle('hack.CardLine', styles, CardLine);
