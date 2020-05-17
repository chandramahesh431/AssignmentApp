const initState = {
  signedInUser: {},
};

const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case "USER_DATA": {
      return { ...state, signedInUser: action.userInfo };
    }
    default:
      return state;
  }
};

export default loginReducer;
