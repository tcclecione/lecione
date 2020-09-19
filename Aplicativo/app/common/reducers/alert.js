import { types } from "common/actions";

const INITIAL_STATE = {
  text: "",
  title: "",
  visible: false
};

function reducer(state = INITIAL_STATE, { type, ...action }) {
  if (type === types.COMMON_SET_ALERT_VISIBILITY) {
    return {
      ...state,
      visible: action.visible
    };
  }

  if (type === types.COMMON_SET_ALERT_TEXT) {
    return {
      ...state,
      text: action.text
    };
  }

  if (type === types.COMMON_SET_ALERT_TITLE) {
    return {
      ...state,
      title: action.title
    };
  }

  return state;
}

export default reducer;
