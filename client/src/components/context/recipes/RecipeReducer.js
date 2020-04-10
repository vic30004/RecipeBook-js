import { SHOW_RECIPES, SET_ALERT, REMOVE_ALERT, RECIPE_ERROR,ADD_RECIPE } from '../types';

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

    case ADD_RECIPE:
      return{
        ...state,
        recipes: [payload,...state.recipes],
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
