import { BRAND_DARK, WHITE } from 'style/colors';
import em from 'utils/em';

export default {
  avatar: {
    width: 85,
    height: 85,
    borderRadius: 100,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: WHITE,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: BRAND_DARK,
    shadowOpacity: 0.5,
    elevation: 5,
  },
  textAvatar: {
    fontSize: em(2.2),
    color: BRAND_DARK,
  },
};
