import React, { Fragment } from 'react';
import { StatusBar } from 'react-native';
import {
  createStackNavigator, createAppContainer,
} from 'react-navigation';
import * as Navigator from 'services/navigator';

import { LoginContainer } from 'login/containers';
import { SchoolListContainer, SchoolDetailContainer } from 'schools/containers';
import { TimelineContainer } from 'timeline/containers';
import { StudentsContainer } from 'students/containers';
import { FeedbackContainer } from 'feedback/containers';
import { AccompanimentContainer } from 'accompaniment/containers';
import { ComplementaryContainer, ComplementaryListContainer } from 'complementary/containers';
import { ContactContainer } from 'contact/containers';
import { ProfileContainer } from 'profile/containers';
import { EvaluationContainer } from 'evaluation/containers';
import { DepartmentsContainer, CollaboratorsContainer, DetailsContainer } from 'employees/containers';
import { DisciplinesContainer } from 'disciplines/containers';
import { CreateAccountContainer } from 'createAccount/containers';

import DrawerNavigator from './DrawerNavigator';

const StackNavigator = createStackNavigator(
  {
    Timeline: {
      screen: TimelineContainer,
    },

    DrawerNavigator: {
      screen: DrawerNavigator,
    },

    Students: {
      screen: StudentsContainer,
    },

    Login: {
      screen: LoginContainer,
    },

    Schools: {
      screen: SchoolListContainer,
    },

    SchoolDetail: {
      screen: SchoolDetailContainer,
    },

    FeedBack: {
      screen: FeedbackContainer,
    },

    Accompaniment: {
      screen: AccompanimentContainer,
    },

    Complementary: {
      screen: ComplementaryContainer,
    },

    ComplementaryList: {
      screen: ComplementaryListContainer,
    },

    Contact: {
      screen: ContactContainer,
    },

    Profile: {
      screen: ProfileContainer,
    },

    Evaluation: {
      screen: EvaluationContainer,
    },

    Employees: {
      screen: DepartmentsContainer,
    },

    Collaborators: {
      screen: CollaboratorsContainer,
    },

    CollaboratorDetails: {
      screen: DetailsContainer,
    },

    Disciplines: {
      screen: DisciplinesContainer,
    },

    CreateAccount: {
      screen: CreateAccountContainer,
    },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    navigationOptions: {
      header: null,
    },
  },
);

const NavigatorContainer = createAppContainer(StackNavigator);

const Router = () => (
  <Fragment>
    <StatusBar backgroundColor="#22262a" barStyle="dark-content" />
    <NavigatorContainer
      ref={Navigator.setContainer}
    />
  </Fragment>
);

export default Router;
