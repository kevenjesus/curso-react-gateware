import api from "services/api";
import { usersActions } from "config/constants";

export const getUsers = () => async dispatch => {
  try {
    const request = await api.get("/users?page=2");
    const payload = request.data.data;

    dispatch({ type: usersActions.LOAD_DATA, payload });
  } catch (err) {
    console.log(err);
  }
};
