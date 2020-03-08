import api from "services/api";
import { usersActions } from "config/constants";
import store from "config/store";

export const getUsers = () => async dispatch => {
  try {
    const request = await api.get("/users?page=2");
    const payload = request.data.data;
    setTimeout(() => {
      dispatch({ type: usersActions.TOGGLE_LOADING });
    }, 2000);
    dispatch({ type: usersActions.LOAD_DATA, payload });
  } catch (err) {
    console.log(err);
  }
};

export const selectedUSer = user => dispatch => {
  console.log(user);
  dispatch({ type: usersActions.SELECTED_USER, payload: user });
};

export const setFirstName = text => dispatch => {
  dispatch({ type: usersActions.SET_FIRST_NAME, payload: text });
};
export const setLastName = text => dispatch => {
  dispatch({ type: usersActions.SET_LAST_NAME, payload: text });
};

export const setAvatar = text => dispatch => {
  dispatch({ type: usersActions.SET_AVATAR, payload: text });
};

export const saveUser = () => dispatch => {
  const { data, userCurrent } = store.getState().users;
  dispatch({ type: usersActions.TOGGLE_LOADING });

  if (userCurrent.id) {
    const dateUpdated = data.map(d => {
      if (d.id === userCurrent.id) {
        d.first_name = userCurrent.first_name;
        d.last_name = userCurrent.last_name;
        d.avatar = userCurrent.avatar;
      }
      return d;
    });
    dispatch({ type: usersActions.LOAD_DATA, payload: dateUpdated });
    dispatch(
      selectedUSer({ id: null, first_name: "", last_name: "", avatar: "" })
    );
  } else {
    userCurrent.id = Math.random();
    dispatch({ type: usersActions.LOAD_DATA, payload: [...data, userCurrent] });
  }

  setTimeout(() => {
    dispatch({ type: usersActions.TOGGLE_LOADING });
  }, 1000);
};

export const removeUser = user => dispatch => {
  const { data } = store.getState().users;
  const newData = [...data];
  const userFind = data.findIndex(d => d.id === user.id);
  if (userFind >= 0) {
    newData.splice(userFind, 1);
    dispatch({ type: usersActions.LOAD_DATA, payload: newData });
  }
};
