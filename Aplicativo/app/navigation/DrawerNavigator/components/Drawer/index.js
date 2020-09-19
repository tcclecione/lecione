import React, { Component } from 'react';
import { View, Icon, Right } from 'native-base';
import { DrawerItems } from 'react-navigation';
import connectStyle from 'utils/connectStyle';
import clearStyle from 'utils/clearStyle';
import { TouchableOpacity, Text, ScrollView } from 'react-native';
import { ModalAlert } from 'common/components';
import { Avatar } from 'common/components';
import { navigate } from 'services/navigator';
import styles from './styles';

class Drawer extends Component {
  state = {
    isVisibleLogoff: false,
  };

  handleModalVisible = (visible) => {
    this.setState({ [visible]: !this.state[visible] });
  }


  render() {
    return (
      <View style={clearStyle(this.props.style)}>
        <TouchableOpacity onPress={() => this.props.navigation.closeDrawer()}>
          <Right style={{ flex: 0 }}>
            <Icon name="close" style={{ color: "#fff", position: 'relative', left: 100 }} />
          </Right>
        </TouchableOpacity>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigate('Profile')}>
            <Avatar
              image={this.props.user.image || null}
              name={this.props.user.name || "User"}
            />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <DrawerItems {...this.props} />
          <TouchableOpacity
            style={styles.option}
            onPress={() => navigate('Students')}
          >
            <Icon name="account" style={styles.icon} />
            <Text style={styles.textOption}>Alterar aluno</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionExit}
            onPress={() => this.handleModalVisible('isVisibleLogoff')}
          >
            <Icon name="logout" style={styles.icon} />
            <Text style={styles.textOption}>Sair</Text>
          </TouchableOpacity>
        </ScrollView>
        <ModalAlert
          isVisible={this.state.isVisibleLogoff}
          title="Sair"
          titleButton="Cancelar"
          onPressRight={() => {
            navigate('Login');
            this.handleModalVisible('isVisibleLogoff');
          }}
          titleButtonRight="Sair"
          onPress={() => this.handleModalVisible('isVisibleLogoff')}
        >
          <Text>Você tem certeza que deseja sair do aplicativo ?</Text>
        </ModalAlert>
      </View>
    );
  }
}

export default connectStyle('Mestre.Drawer', styles, Drawer);
