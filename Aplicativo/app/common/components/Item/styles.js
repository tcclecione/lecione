import { Platform } from 'react-native';
import * as colors from 'style/colors';
import variables from 'style/theme/variables/platform';

export default {
  '.floatingLabel': {
    paddingTop: 15,
    paddingBottom: 5,
    'NativeBase.Input': {
      paddingHorizontal: 15,
      height: 50,
      top: 8,
      '.multiline': {
        minHeight: 50,
      },
    },
    'NativeBase.Text': {
      paddingHorizontal: 15,
      height: 50,
      top: 8,
      '.multiline': {
        minHeight: 50,
      },
    },
    'NativeBase.Label': {
      paddingTop: 5,
      paddingHorizontal: 15,
      top: 0,
    },
    'NativeBase.Icon': {
      top: 6,
    },
  },
  '.disableBorderBottom': {
    borderBottomWidth: 0,
  },
  '.disableMargimBottom': {
    marginBottom: 0,
  },
  '.hasError': {
    borderBottomWidth: 1,
    borderBottomColor: 'red',
  },
  '.fixedLabel': {
    'NativeBase.Label': {
      position: null,
      top: null,
      left: null,
      right: null,
      flex: 1,
      height: null,
      width: null,
      fontSize: variables.inputFontSize,
    },
    'NativeBase.Input': {
      flex: 2,
      fontSize: variables.inputFontSize,
    },
    'NativeBase.Text': {
      flex: 2,
      fontSize: variables.inputFontSize,
    },
  },
  '.stackedLabel': {
    'NativeBase.Label': {
      position: null,
      top: null,
      left: null,
      right: null,
      paddingTop: 5,
      alignSelf: 'flex-start',
      fontSize: variables.inputFontSize - 2,
    },
    'NativeBase.Icon': {
      marginTop: 36,
    },
    'NativeBase.Input': {
      alignSelf: Platform.OS === 'ios' ? 'stretch' : 'flex-start',
      flex: 1,
      width: Platform.OS === 'ios' ? null : variables.deviceWidth - 25,
      fontSize: variables.inputFontSize,
    },
    'NativeBase.Text': {
      alignSelf: Platform.OS === 'ios' ? 'stretch' : 'flex-start',
      flex: 1,
      width: Platform.OS === 'ios' ? null : variables.deviceWidth - 25,
      fontSize: variables.inputFontSize,
    },
    flexDirection: null,
    height: variables.inputHeightBase + 15,
  },
  '.inlineLabel': {
    'NativeBase.Label': {
      position: null,
      top: null,
      left: null,
      right: null,
      paddingRight: 20,
      height: null,
      width: null,
      fontSize: variables.inputFontSize,
    },
    'NativeBase.Input': {
      paddingLeft: 5,
      fontSize: variables.inputFontSize,
    },
    'NativeBase.Text': {
      paddingLeft: 5,
      fontSize: variables.inputFontSize,
    },
    flexDirection: 'row',
  },
  'NativeBase.Label': {
    fontSize: variables.inputFontSize,
    color: variables.inputColorPlaceholder,
    paddingRight: 5,
  },
  'NativeBase.Icon': {
    fontSize: 24,
    paddingRight: 8,
  },
  'NativeBase.IconNB': {
    fontSize: 24,
    paddingRight: 8,
  },
  'NativeBase.Text': {
    '.multiline': {
      height: null,
    },
    height: variables.inputHeightBase,
    color: variables.inputColor,
    paddingLeft: 5,
    paddingRight: 5,
    flex: 1,
    fontSize: variables.inputFontSize,
    lineHeight: variables.inputLineHeight,
    top: Platform.OS === 'ios' ? 1.5 : undefined,
  },
  'NativeBase.Input': {
    '.multiline': {
      height: null,
    },
    height: variables.inputHeightBase,
    color: variables.inputColor,
    flex: 1,
    top: Platform.OS === 'ios' ? 1.5 : undefined,
    fontSize: variables.inputFontSize,
    lineHeight: variables.inputLineHeight,
  },
  '.underline': {
    'NativeBase.Input': {
      paddingLeft: 15,
    },
    'NativeBase.Text': {
      paddingLeft: 15,
    },
    '.success': {
      borderColor: variables.inputSuccessBorderColor,
    },
    '.error': {
      borderColor: variables.inputErrorBorderColor,
    },
    borderWidth: variables.borderWidth * 2,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderColor: variables.inputBorderColor,
  },
  '.regular': {
    'NativeBase.Input': {
      paddingLeft: 8,
    },
    'NativeBase.Text': {
      paddingLeft: 8,
    },
    'NativeBase.Icon': {
      paddingLeft: 10,
    },
    '.success': {
      borderColor: variables.inputSuccessBorderColor,
    },
    '.error': {
      borderColor: variables.inputErrorBorderColor,
    },
    borderWidth: variables.borderWidth * 2,
    borderColor: variables.inputBorderColor,
  },
  '.rounded': {
    'NativeBase.Input': {
      paddingLeft: 8,
    },
    'NativeBase.Text': {
      paddingLeft: 8,
    },
    'NativeBase.Icon': {
      paddingLeft: 10,
    },
    '.success': {
      borderColor: variables.inputSuccessBorderColor,
    },
    '.error': {
      borderColor: variables.inputErrorBorderColor,
    },
    borderWidth: variables.borderWidth * 2,
    borderRadius: 30,
    borderColor: variables.inputBorderColor,
  },

  '.success': {
    'NativeBase.Icon': {
      color: variables.inputSuccessBorderColor,
    },
    'NativeBase.IconNB': {
      color: variables.inputSuccessBorderColor,
    },
    '.rounded': {
      borderRadius: 30,
      borderColor: variables.inputSuccessBorderColor,
    },
    '.regular': {
      borderColor: variables.inputSuccessBorderColor,
    },
    '.underline': {
      borderWidth: variables.borderWidth * 2,
      borderTopWidth: 0,
      borderRightWidth: 0,
      borderLeftWidth: 0,
      borderColor: variables.inputSuccessBorderColor,
    },
    borderColor: variables.inputSuccessBorderColor,
  },

  '.error': {
    'NativeBase.Icon': {
      color: variables.inputErrorBorderColor,
    },
    'NativeBase.IconNB': {
      color: variables.inputErrorBorderColor,
    },
    '.rounded': {
      borderRadius: 30,
      borderColor: variables.inputErrorBorderColor,
    },
    '.regular': {
      borderColor: variables.inputErrorBorderColor,
    },
    '.underline': {
      borderWidth: variables.borderWidth * 2,
      borderTopWidth: 0,
      borderRightWidth: 0,
      borderLeftWidth: 0,
      borderColor: variables.inputErrorBorderColor,
    },
    borderColor: variables.inputErrorBorderColor,
  },
  '.disabled': {
    'NativeBase.Icon': {
      color: '#384850',
    },
    'NativeBase.IconNB': {
      color: '#384850',
    },
  },
  '.display': {
    'NativeBase.Input': {
      color: colors.BASE_COLOR,
    },
    'NativeBase.Text': {
      color: colors.BASE_COLOR,
    },
    borderBottomWidth: 0,
  },
  '.select': {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 70,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 10,
    'NativeBase.Label': {
      paddingHorizontal: 0,
      position: null,
      top: null,
      left: null,
      right: null,
      flex: 1,
      height: null,
      width: '100%',
      fontSize: variables.inputFontSize,
    },
    'NativeBase.Text': {
      width: '100%',
      paddingHorizontal: 0,
    },
  },
  '.noBottomMargin': {
    marginBottom: 0,
  },
  width: '100%',
  borderWidth: variables.borderWidth * 2,
  borderTopWidth: 0,
  borderRightWidth: 0,
  borderLeftWidth: 0,
  backgroundColor: '#F8F9FA',
  flexDirection: 'row',
  alignItems: 'center',
  marginLeft: 2,
  borderBottomColor: '#1B1B1B',
  marginBottom: 25,
};
