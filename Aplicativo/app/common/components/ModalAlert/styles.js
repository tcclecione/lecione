import * as colors from '../../../style/colors';

export default {
  'NativeBase.Card': {
    flex: 0,
    'NativeBase.CardItem': {
      '.header': {
        backgroundColor: colors.BRAND_SECUNDARY,
        'NativeBase.Text': {
          fontWeight: 'bold',
          color: colors.WHITE,
        },
      },
      '.footer': {
        justifyContent: 'space-around',
        'NativeBase.Button': {
          flex: 1,
          marginVertical: 5,
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 5,
          '.gray': {
            backgroundColor: colors.GRAY,
          },
          '.yellow': {
            backgroundColor: '#cc9d41',
          },
          'NativeBase.Text': {
            color: colors.WHITE,
            alignSelf: 'center',
          },
        },
      },
    },
  },
};
