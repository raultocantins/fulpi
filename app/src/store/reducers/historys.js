const initialState = {
    historys: []
  };
  export const historys = (state = initialState, action) => {  
    switch (action.type) {
      case 'HISTORYS':
        return {
          ...state,
          historys: action.historys
        };
      default:
        return state;
    }
  };