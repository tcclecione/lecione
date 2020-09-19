import { valueMirror } from "ramda-extension";

const types = valueMirror([
  "COMMON_SET_ALERT_VISIBILITY",
  "COMMON_SET_ALERT_TITLE",
  "COMMON_SET_ALERT_TEXT"
]);

export { types };

export function showAlert() {
  return {
    type: types.COMMON_SET_ALERT_VISIBILITY,
    visible: true
  };
}

export function setTitle(title) {
  return {
    type: types.COMMON_SET_ALERT_TITLE,
    title
  };
}

export function setText(text) {
  return {
    type: types.COMMON_SET_ALERT_TEXT,
    text
  };
}

export function alert({ title, text }) {
  return dispatch => {
    dispatch(setTitle(title));
    dispatch(setText(text));
    dispatch(showAlert());
  };
}

export function hideAlert() {
  return dispatch => {
    dispatch({
      type: types.COMMON_SET_ALERT_VISIBILITY,
      visibility: false
    });
    setTimeout(() => {
      dispatch(setTitle(""));
      dispatch(setText(""));
    }, 1000);
  };
}
