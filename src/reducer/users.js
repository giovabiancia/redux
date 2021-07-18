const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_USER_LOADING":
      return {
        loading: true,
      };
    case "FETCH_USER_SUCCESS":
      return {
        loading: false,
        users: action.payload,
      };
    case "FETCH_USER_FAILURE":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
