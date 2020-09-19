import React, { Component } from 'react';
import connectStyle from 'utils/connectStyle';
import {
  Text, Content, Card, CardItem, Left, Right, Body, Thumbnail, View
} from 'native-base';
import { FlatList } from 'react-native';
import styles from './styles';
import moment from 'moment';

const image = "https://image.flaticon.com/icons/png/128/149/149071.png"

class CardLine extends Component {
  render() {
    const { complementaries } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={complementaries}
          numColumns={1}
          keyExtractor={(item, index) => index.toString()}
          onEndReachedThreshold={0.10}
          contentContainerStyle={complementaries.length ? {} : styles.flatList}
          renderItem={({ item }) => (
            <Content style={styles.content}>
              <Card style={{ flex: 0 }}>
                <Right>
                  <CardItem>
                    <Left>
                      <Thumbnail source={{ uri: item.employee_image || image }} />
                      <Body>
                        <Text>{item.employee_name}</Text>
                        <Text note>{item.employee_office_name}</Text>
                      </Body>
                    </Left>
                    <Right>
                      <Text style={styles.textNote}>{item.note}</Text>
                    </Right>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <View style={styles.contentTitle}>
                        <Text style={styles.title}>Tarefa: </Text>
                        <Text note style={styles.title}>{item.task}</Text>
                      </View>
                      <View style={styles.contentTitle}>
                        <Text style={styles.title}>Valor da tarefa: </Text>
                        <Text note style={styles.title}>{item.evaluation_note}</Text>
                      </View>
                      <View style={styles.contentTitle}>
                        <Text style={styles.title}>Data da aplicação: </Text>
                        <Text note style={styles.title}>{moment(item.evaluation_day, 'YYYY-MM-DD').format('DD/MM/YYYY')}</Text>
                      </View>
                      <View style={styles.contentResume}>
                        <Text style={styles.titleResume}>Resumo da Tarefa</Text>
                      </View>
                      <Text note style={styles.title}>{item.evaluation_resume}</Text>
                    </Body>
                  </CardItem>
                  <CardItem>
                    <Right>
                      <Text note style={{ fontSize: 12 }}>{moment(item.created_at, 'YYYY-MM-DD').format('DD/MM/YYYY')}</Text>
                    </Right>
                  </CardItem>
                </Right>
              </Card>
            </Content>
          )}
          ListEmptyComponent={() => (
            <Text style={styles.textListEmpty}>
              Você não possui relatórios...
            </Text>
          )}
        />
      </View>
    );
  }
}

export default connectStyle('hack.CardLine', styles, CardLine);
