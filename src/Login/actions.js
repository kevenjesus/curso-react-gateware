import axios from "axios";
import { loginActions } from "config/constants";

export const setMessage = message => dispatch => {
  dispatch({ type: loginActions.CHANGED_MESSAGE, payload: message });
};

export const setIsLoggin = status => dispatch => {
  dispatch({ type: loginActions.CHANGED_ISLOGGIN, payload: status });
};

export const fetchLogin = data => async dispatch => {
  try {
    const payload = await axios.post("https://reqres.in/api/login", data);
    dispatch(setMessage({ type: "success", text: "Logado com sucesso" }));
    window.localStorage.setItem("token", payload.token);
    setTimeout(() => {
      dispatch(setIsLoggin(true));
    }, 1000);
  } catch (err) {
    dispatch(setMessage({ type: "danger", text: err.response.data.error }));
  }
};
