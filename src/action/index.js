import axios from "axios";
import { useDispatch } from "react-redux";

export const increment = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
export const login = () => {
  return {
    type: "SIGN_IN",
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: "FETCH_USER_SUCCESS",
    payload: users,
  };
};
export const fetchUsersLoading = () => {
  return {
    type: "FETCH_USER_LOADING",
  };
};
export const fetchUsersFailure = (error) => {
  return {
    type: "FETCH_USER_FAILURE",
    payload: error,
  };
};

export const fetchUsers = () => {
  // usa il thunk middleware che retun una funzione del
  // può fare chiamate asincrione

  return (dispatch) => {
    dispatch(fetchUsersLoading());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;

        // richiamo l' azione sopra che passa come payload gli utenti al reducer ( il quale li salva nello stato)
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUsersFailure(errorMsg));
      });
  };
};
