const initialState = {
  user: [],
};
export const authentication = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNIN_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_IMAGE":
      return {
        ...state,
        user: { ...state.user, image: action.image },
      };

    default:
      return state;
  }
};
