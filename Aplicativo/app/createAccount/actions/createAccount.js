import types from 'createAccount/types';
import { Toast } from 'native-base';
import { StackActions, NavigationActions } from 'react-navigation';

export const getResponsible = cpf => ({
  type: types.DETAILS_RESPONSIBLE,
  payload: {
    request: {
      url: `/responsibles/details`,
      method: 'GET',
      params: {
        cpf,
      }
    },
  },
});

export const saveAccount = (payload, navigation) => dispatch => (
  dispatch({
    type: types.CREATE_ACCOUNT,
    payload: {
      request: {
        url: '/auth/create-account',
        method: 'POST',
        data: payload,
      },
    },
  }).then(() => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({
        routeName: 'Login',
        params: {
          isCreateAccount: true
        }
      })],
    });
    navigation.dispatch(resetAction);
  }).catch((error) => {
    return (Toast.show({
      text: error.error.response.data.message,
      buttonText: 'Ok',
      type: 'danger'
    }))
  })
);

export function clearFields() {
  return {
    type: types.CLEAR_FIELDS_VALUES,
  };
}