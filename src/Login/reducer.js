import { loginActions } from "config/constants";

const INITIAL_STATE = {
  message: { type: null, text: null },
  isLoggin: false
};

export default function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case loginActions.CHANGED_MESSAGE:
      return { ...state, message: action.payload };
    case loginActions.CHANGED_ISLOGGIN:
      return { ...state, isLoggin: action.payload };
    default:
      return state;
  }
}
