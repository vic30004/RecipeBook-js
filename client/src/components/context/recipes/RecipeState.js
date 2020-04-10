import React,{useReducer} from 'react';
import RecipeContext from './RecipeContext';
import axios from 'axios';
import uuid from 'uuid';

import RecipeReducer from './RecipeReducer';
import { SHOW_RECIPES,SET_ALERT,REMOVE_ALERT,RECIPE_ERROR } from '../types';

const RecipeState = (props) => {
  const initialState = {
    recipes: [],
    loading: true,
    recipe: [],
    error: {},
    errorState: [],
  };
  const [state, dispatch] = useReducer(RecipeReducer, initialState);

//   Show all recipes

const showRecipes = async ()=>{
    try {
        const res = await axios.get('/api/recipes');
        dispatch({
            type: SHOW_RECIPES,
            payload:res.data
        })
    } catch (error) {
        const errors = error.response;

      if (errors) {
        setAlert(errors, 'danger');
        setTimeout(() => {
          removeAlert();
        }, 5000);
      }
      dispatch({
        type: RECIPE_ERROR,
        payload: error.response.data.error,
      });
    }
}


  // Set Alert TODO add this to dom
  const setAlert = (msg, alertType) => {
    const id = uuid.v4();
    return dispatch({
      type: SET_ALERT,
      payload: { msg, alertType, id },
    });
  };

  const removeAlert = () => dispatch({ type: REMOVE_ALERT });

  return (
      <RecipeContext.Provider value={{
          recipes: state.recipes,
          recipe: state.recipe,
          loading:state.loading,
          error:state.error,
          errorState: state.errorState
      }}
      >
      {props.children}
      </RecipeContext.Provider>
  );
};

export default RecipeState;
