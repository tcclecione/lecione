import * as Navigator from 'services/navigator';
import { AsyncStorage, Alert } from 'react-native';
import { createAction } from 'redux-actions';
import axios from 'axios';
import types from 'login/types';

export const setUser = createAction(types.SET_USER);

export const setStudent = createAction(types.SET_STUDENT_LOGIN);

export function stopLoading() {
  return { type: types.AUTH_STOP_LOADING, payload: false };
}

export function logout() {
  return (dispatch) => {
    AsyncStorage.clear().then(() => {
      Navigator.reset('Login');
      dispatch({ type: types.LOGOUT });
    });
  };
}

export function makeLogin() {
  return async (dispatch, getState) => {
    let { cpf, password } = getState().login.form;

    if (cpf == undefined || cpf == '') {
      return Alert.alert(
        'Lecione',
        'CPF é obrigatório',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      );;
    }
    if (password == undefined || password == '') {
      return Alert.alert(
        'Lecione',
        'Senha é obrigatório',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      );;
    }

    cpf = cpf.trim();
    password = password.trim();

    dispatch({ type: types.AUTH_REQUEST })

    axios({
      method: 'POST',
      url: 'https://fathomless-sierra-19788.herokuapp.com/api/auth',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer $2b$10$5J1S7CWpXpiCWgs7OjG1n.Rt/KRd9jBLoFEL3sFbElCCaJ.UqNQg',
      },
      data: JSON.stringify({
        cpf, password
      })
    })
      .then(response => {
        console.log('RESPONSE', response)
        dispatch({ type: types.AUTH_REQUEST_SUCCESS, payload: response.data });
        // console.log('console.data',)
        // if (response.data.content.filhos.length == 1) {
        //   dispatch({
        //     type: types.SET_STUDENT,
        //     payload: response.data.content.filhos[0],
        //   })
        //   dispatch({
        //     type: types.SET_STUDENT_LOGIN,
        //     payload: response.data.content.filhos[0],
        //   })
        // }
        // Navigator.reset(response.data.content.filhos.length > 1 ? 'Students' : 'DrawerNavigator');
        Navigator.reset('Students');
      })
      .catch(error => {
        dispatch({ type: types.AUTH_REQUEST_FAIL });
        console.log('ERRR', error)
        Alert.alert(
          'Lecione',
          'Usuário ou senha incorretos',
          [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ],
          { cancelable: false },
        );
      });

    /* return dispatch({
       type: types.AUTH_REQUEST,
       payload: {
         request: {
           url: '',
           method: 'GET',
           /*header: {
             Authorization: 'hackathon',
           },*/
    /*data: {
      authDto: {
        cpf,
        senha: password,
      },
    },
  },
},
})
.then(async ({ payload }) => {
 /* const { user, token } = payload.data;
  await AsyncStorage.setItem('@app-mazza/user', JSON.stringify({ ...user }));
  await AsyncStorage.setItem('@app-mazza/token', token);
  Navigator.reset('MasterProject');
  console.log('payload', payload);
})
.catch(() => {
  dispatch(
    alert({
      title: 'App Mazza',
      text: 'Usuário ou senha inválidos. Por favor, verifique os dados e tente novamente.',
    })
  );
});*/
  };
}

export function setValueToState(input, value) {
  return {
    type: types.SET_VALUE,
    input,
    value,
  };
}

export function clearForm() {
  return {
    type: types.CLEAR_FORM,
  };
}

