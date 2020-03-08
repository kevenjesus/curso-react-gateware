import { usersActions } from "config/constants";

const INITIAL_STATE = {
  data: []
};

export default function usersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case usersActions.LOAD_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}
