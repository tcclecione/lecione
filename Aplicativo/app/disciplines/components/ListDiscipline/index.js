import React, { Component } from 'react';
import connectStyle from 'utils/connectStyle';
import {
  Thumbnail,
} from 'native-base';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
const image = "https://image.flaticon.com/icons/png/128/149/149071.png"
import { navigate } from 'services/navigator';

class ListDiscipline extends Component {
  render() {
    const { disciplines } = this.props;
    return (
      <FlatList
        data={disciplines}
        numColumns={1}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={disciplines.length ? {} : styles.flatList}
        onEndReachedThreshold={0.10}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={[styles.contentTitle, { backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}` }]}>
              <Text style={styles.title}>{item.discipline_name}</Text>
            </View>
            <View style={styles.contentDescription}>
              <Text style={{ padding: 10 }}>
                {item.description}
              </Text>
              <TouchableOpacity onPress={() => navigate('CollaboratorDetails', { id: item.employee_id })}>
                <View style={styles.cardEmployee}>
                  <Thumbnail source={{ uri: item.employee_image || image }} />
                  <View style={styles.contentEmployee}>
                    <Text>{item.employee_name}</Text>
                    <Text note>{item.employee_office}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.textListEmpty}>
            Este aluno não possui grade curricular...
          </Text>
        )}
      />
    );
  }
}

export default connectStyle('hack.ListDiscipline', styles, ListDiscipline);
