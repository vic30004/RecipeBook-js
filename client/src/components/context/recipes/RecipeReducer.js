import { SHOW_RECIPES, SET_ALERT, REMOVE_ALERT, RECIPE_ERROR } from '../types';

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SHOW_RECIPES:
      return {
        ...state,
        recipes: payload,
        loading: false,
      };
    
    case RECIPE_ERROR:
        return{
            ...state,
            errorState:payload,
            loading:false
        }

    case SET_ALERT:
      return {
        ...state,
        errorState: payload,
      };
    case REMOVE_ALERT:
      return {
        ...state,
        errorState: [],
      };

    default:
      return state;
  }
};
