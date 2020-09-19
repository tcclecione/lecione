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
    const { monitorings } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={monitorings}
          numColumns={1}
          keyExtractor={(item, index) => index.toString()}
          onEndReachedThreshold={0.10}
          contentContainerStyle={monitorings.length ? {} : styles.flatList}
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
                  </CardItem>
                  <CardItem>
                    <Body>
                      <View style={styles.containerTitle}>
                        <Text style={styles.title}>Anamnese: </Text>
                        <Text note style={styles.title}>{item.anamnesis}</Text>
                      </View>
                      <View style={styles.containerTitle}>
                        <Text style={styles.title}>Exame Complementar: </Text>
                        <Text note style={styles.title}>{item.complementary_exam}</Text>
                      </View>
                      <View style={styles.containerTitle}>
                        <Text style={styles.title}>Horário da Consulta: </Text>
                        <Text note style={styles.title}>{moment(item.consult_time, 'YYYY-MM-DD').format('DD/MM/YYYY')}</Text>
                      </View>
                      <View style={styles.contentResume}>
                        <Text style={styles.titleResume}>Resumo da Consulta</Text>
                      </View>
                      <Text note style={styles.title}>{item.consult_resume}</Text>
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
