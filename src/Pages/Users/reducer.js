import { usersActions } from "config/constants";

const INITIAL_STATE = {
  data: [],
  dataFilteed: [],
  search: "",
  loading: true,
  userCurrent: {
    id: null,
    first_name: "",
    last_name: "",
    avatar: ""
  }
};

export default function usersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case usersActions.LOAD_DATA:
      return { ...state, data: action.payload };
    case usersActions.CHANGED_SEARCH:
      return { ...state, search: action.payload };
    case usersActions.TOGGLE_LOADING:
      return { ...state, loading: !state.loading };
    case usersActions.SELECTED_USER:
      console.log(action.payload);
      return { ...state, userCurrent: action.payload };
    case usersActions.SET_FIRST_NAME:
      return {
        ...state,
        userCurrent: { ...state.userCurrent, first_name: action.payload }
      };
    case usersActions.SET_LAST_NAME:
      return {
        ...state,
        userCurrent: { ...state.userCurrent, last_name: action.payload }
      };
    case usersActions.SET_AVATAR:
      return {
        ...state,
        userCurrent: { ...state.userCurrent, avatar: action.payload }
      };
    default:
      return state;
  }
}
