import React, { useReducer } from 'react';
import RecipeContext from './RecipeContext';
import axios from 'axios';
import uuid from 'uuid';
import RecipeReducer from './RecipeReducer';
import {
  SHOW_RECIPES,
  SET_ALERT,
  REMOVE_ALERT,
  RECIPE_ERROR,
  ADD_RECIPE,
} from '../types';
import setAuthToken from '../../../utils/SetAuthToken';

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

  const showRecipes = async () => {
    try {
      const res = await axios.get('/api/recipes');
      dispatch({
        type: SHOW_RECIPES,
        payload: res.data.message,
      });
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
        payload: error.message,
      });
    }
  };

  // Add new recipe
  const addRecipe = async ({
    title,
    cookTime,
    directions,
    ingredients,
    description,
    picture,
  }) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${localStorage.token}`,
        },
      };
      // const body = {
      //   title,
      //   cookTime,
      //   directions,
      //   ingredients,
      //   description,
      //   picture,
      // };
      let file = picture;
      console.log(picture)
      let formdata = new FormData();

      formdata.append('title', title);
      formdata.append('cookTime', cookTime);
      formdata.append('directions', directions);
      formdata.append('ingredients', ingredients);
      formdata.append('description', description);
      formdata.append('pictureId', file[0]);

      const res = await axios.post('/api/recipes', formdata, config);
      dispatch({
        type: ADD_RECIPE,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: RECIPE_ERROR,
        payload: error.response,
      });
    }
  };

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
    <RecipeContext.Provider
      value={{
        recipes: state.recipes,
        recipe: state.recipe,
        loading: state.loading,
        error: state.error,
        errorState: state.errorState,
        showRecipes,
        addRecipe,
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeState;
