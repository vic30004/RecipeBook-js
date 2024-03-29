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
  SHOW_SAVED,
  SAVED_ERROR,
  SAVE_RECIPE,
  REMOVE_SAVED_RECIPE,
  GET_SINGLE_RECIPE,
  GET_MYRECIPES,
  MYRECIPES_ERROR,
} from '../types';
import setAuthToken from '../../../utils/SetAuthToken';

const RecipeState = (props) => {
  const initialState = {
    recipes: [],
    loading: true,
    recipe: [],
    error: {},
    savedLoaded: true,
    errorState: [],
    saved: [],
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
    cookT,
    directions,
    description,
    picture,
    finalIngredient,
    prep,
    pri,
    serving,
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
      let file = picture;
      console.log(picture);
      let formdata = new FormData();

      formdata.append('title', title);
      formdata.append('cookTime', cookT);
      finalIngredient.map((data) => {
        formdata.append('ingredients', data);
      });
      directions.map((data) => {
        formdata.append('directions', data.direction);
      });
      formdata.append('private', pri);
      formdata.append('prepTime', prep);
      formdata.append('serving', serving);
      formdata.append('description', description);
      formdata.append('pictureId', file[0]);
      console.log(formdata);

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
  
  // Show Saved
  const showSaved = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      };
      const res = await axios.get('/api/recipes/save', config);
      dispatch({
        type: SHOW_SAVED,
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: SAVED_ERROR,
        payload: error.message,
      });
    }
  };

  // Get logged in users recipes 
  const getMyRecipes = async() => {
      if (localStorage.token) {
        setAuthToken(localStorage.token);
    } try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        }
      }
      const res = await axios.get('/api/recipes/my-recipes',config)
      dispatch({
        type: GET_MYRECIPES,
        payload:res.data
      })
    }catch (error) {
              dispatch({
                type: RECIPE_ERROR,
                payload: error.response,
              });
      }
}


  // Get single recipe by id
  const getSingleRecipe = async (recipeId) => {
    try {
      const res = await axios.get(`/api/recipes/${recipeId}`);
      dispatch({
        type: GET_SINGLE_RECIPE,
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: RECIPE_ERROR,
        payload: error.name,
      });
    }
  };

  // Save Recipe
  const saveRecipe = async (recipeId) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.token}`,
        },
      };
      const body = {
        recipeId,
      };

      const res = await axios.post('/api/recipes/save', body, config);
      dispatch({
        type: SAVE_RECIPE,
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: SAVED_ERROR,
        payload: error.message,
      });
    }
  };
  // Remove Save Recipe
  const removeSavedRecipe = async (recipeId) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.token}`,
        },
      };
      const body = {
        recipeId,
      };

      const res = await axios.post('/api/recipes/save', body, config);
      dispatch({
        type: REMOVE_SAVED_RECIPE,
        payload: res.data.data.favorite_id,
      });
    } catch (error) {
      dispatch({
        type: SAVED_ERROR,
        payload: error.message,
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
        saved: state.saved,
        savedLoaded: state.savedLoaded,
        showRecipes,
        addRecipe,
        saveRecipe,
        showSaved,
        removeSavedRecipe,
        getSingleRecipe,
        getMyRecipes,
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeState;
