import React from 'react';
import { WHITE } from 'style/colors';
import { createDrawerNavigator } from 'react-navigation';
import { TimelineContainer } from 'timeline/containers';
import { FeedbackContainer } from 'feedback/containers';
import { AccompanimentListContainer } from 'accompaniment/containers';
import { ComplementaryListContainer } from 'complementary/containers';
import { ContactContainer } from 'contact/containers';
import { ProfileContainer } from 'profile/containers';
import { DepartmentsContainer } from 'employees/containers';
import { DisciplinesContainer } from 'disciplines/containers';


import { Icon } from './components';
import { DrawerContainer } from './containers';

export default createDrawerNavigator(
  {
    Timeline: {
      screen: TimelineContainer,
      navigationOptions: {
        drawerIcon: <Icon name="chart-timeline" />,
        title: 'Linha do tempo',
      },
    },

    FeedBack: {
      screen: FeedbackContainer,
      navigationOptions: {
        drawerIcon: <Icon name="forum" />,
        title: 'Feedback',
      },
    },

    AccompanimentList: {
      screen: AccompanimentListContainer,
      navigationOptions: {
        drawerIcon: <Icon name="home-outline" />,
        title: 'Acompanhamentos',
      },
    },

    ComplementaryList: {
      screen: ComplementaryListContainer,
      navigationOptions: {
        drawerIcon: <Icon name="television" />,
        title: 'Cursos complementares',
      },
    },
    Contact: {
      screen: ContactContainer,
      navigationOptions: {
        drawerIcon: <Icon name="phone" />,
        title: 'Contato',
      },
    },
    Profile: {
      screen: ProfileContainer,
      navigationOptions: {
        drawerIcon: <Icon name="account-circle" />,
        title: 'Perfil',
      },
    },
    Employees: {
      screen: DepartmentsContainer,
      navigationOptions: {
        drawerIcon: <Icon name="account-group" />,
        title: 'Colaboradores',
      },
    },
    Disciplines: {
      screen: DisciplinesContainer,
      navigationOptions: {
        drawerIcon: <Icon name="view-list" />,
        title: 'Grade curricular',
      },
    },
  },
  {
    contentComponent: props => <DrawerContainer {...props} />,
    contentOptions: {
      inactiveBackgroundColor: 'transparent',
      activeBackgroundColor: '#cc9d41',
      inactiveTintColor: WHITE,
      activeTintColor: WHITE,
      iconContainerStyle: {
        marginLeft: 18,
        marginRight: 0,
        opacity: 1,
        width: 30,
      },
      labelStyle: {
        fontWeight: 'normal',
      },
    },
  },
);
