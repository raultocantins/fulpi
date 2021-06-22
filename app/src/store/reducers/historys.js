const initialState = {
    historys: []
  };
  export const historys = (state = initialState, action) => { 
    console.log(action)     
    switch (action.type) {
      case 'HISTORYS':
        return {
          ...state,
          historys: action.historys
        };
        case 'FAVORITE_BOOK':
          return {
            ...state.historys,
            favorites:[...state.historys.favorite,action.id]
          };
      default:
        return state;
    }
  };