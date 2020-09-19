import axios from 'react-native-axios';

const DEVELOP_HOST = 'http://192.168.0.122:3307/api/';
const PRODUCTION_HOST = 'https://fathomless-sierra-19788.herokuapp.com/api';   //MAQ LABS

const CURRENT_HOST = PRODUCTION_HOST;

export {
  DEVELOP_HOST,
  PRODUCTION_HOST,
  CURRENT_HOST,
};


export default {
  default: {
    client: axios.create({
      baseURL: CURRENT_HOST,
      responseType: 'json',
    }),
    options: {
      returnRejectedPromiseOnError: true,
      interceptors: {
        request: [
          ({ getState }, config) => ({
            ...config,
            headers: {
              ...(config.headers || {}),
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          }),
        ],
        response: [
          {
            success: (store, response) => response,
            error: (store, error) => {
              console.log('error', error);
              return Promise.reject(error);
            },
          },
        ],
      },
    },
  },
};
