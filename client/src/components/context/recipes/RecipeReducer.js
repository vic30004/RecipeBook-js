import {
  SHOW_RECIPES,
  SET_ALERT,
  REMOVE_ALERT,
  RECIPE_ERROR,
  ADD_RECIPE,
  SHOW_SAVED,
  SAVED_ERROR,
  SAVE_RECIPE,
  REMOVE_SAVED_RECIPE
} from '../types';

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
    case SAVED_ERROR:
      return {
        ...state,
        errorState: payload,
        loading: false,
      };
      case REMOVE_SAVED_RECIPE:
        return{
          ...state,
          saved:state.saved.filter(save=>save.favorite_id !== payload),
          loading:false
        }

    case ADD_RECIPE:
      return {
        ...state,
        recipes: [payload, ...state.recipes],
        loading: false,
      };

    case SHOW_SAVED:
      return {
        ...state,
        saved: payload,
        loading: false,
      };
    case SAVE_RECIPE:
      return {
        ...state,
        saved: [payload, ...state.saved],
        loading: false,
      };
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
