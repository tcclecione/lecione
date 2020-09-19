import React, { Component } from 'react';
import connectStyle from 'utils/connectStyle';
import {
  Text, Card, CardItem, Left, Body, Thumbnail, Icon, View
} from 'native-base';
import styles from './styles';
import { CardDay } from '../';
import { TouchableOpacity, ScrollView } from 'react-native';
import { navigate } from 'services/navigator';

const image = "https://image.flaticon.com/icons/png/128/149/149071.png"

class About extends Component {

  listIcons(number) {
    let arr = [];
    let i = 0
    while (i < Math.round(number)) {
      i++
      arr.push(<Icon name="star" style={styles.iconStar} />)
    }

    return arr
  }

  render() {
    const { details, period, evaluation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.contentOffice}>
          <Text style={styles.textNameOffice}>{details.employee_office_name}</Text>
        </View>
        <ScrollView>
          <TouchableOpacity
            style={styles.contentEvaluation}
            onPress={() => navigate('Evaluation',
              {
                type_school_id: details.monitoring_type_school_id,
                type_id: details.monitoring_type_id,
                screen: false,
              }
            )}>
            <Text style={styles.textEvaluation}>{evaluation.count ? parseFloat(evaluation.sum / evaluation.count).toFixed(2) : 0}({evaluation.count})</Text>
            <View style={styles.contentTextEvaluation}>
              {evaluation.count ? this.listIcons((evaluation.sum / evaluation.count)) : <Text style={styles.textEvaluation}>Ver avaliações</Text>}
            </View>
          </TouchableOpacity>
          <View>
            <Text note style={styles.textDescription}>
              {details.description}
            </Text>
          </View>
          <View style={styles.contentView}>
            <Text style={styles.subTitle}>Funcionamento</Text>
            <View style={styles.contentCardPeriod}>
              {period && (
                <>
                  {period.map((item, key) => (
                    <CardDay key={key} day={item.period} />
                  ))}
                </>
              )}
            </View>
          </View>
          <View style={styles.contentView}>
            <Text style={styles.subTitle}>Profissional</Text>
            <TouchableOpacity onPress={() => navigate('CollaboratorDetails', { id: details.employee_id })}>
              <Card style={styles.cardEmployee} >
                <CardItem>
                  <Left>
                    <Thumbnail source={{ uri: details.employee_image || image }} />
                    <Body>
                      <Text>{details.employee_name}</Text>
                      <Text note>{details.employee_office_name}</Text>
                    </Body>
                  </Left>
                </CardItem>
              </Card>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default connectStyle('hack.About', styles, About);
