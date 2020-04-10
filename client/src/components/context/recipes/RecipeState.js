import React,{useReducer} from 'react';
import RecipeContext from './RecipeContext';
import axios from 'axios';
import RecipeReducer from './RecipeReducer';
import { SHOW_RECIPES } from '../types';

const RecipeState = (props) => {
  const initialState = {
    recipes: [],
    loading: true,
    recipe: [],
    error: {},
    errorState: [],
  };
  const [state, dispatch] = useReducer(RecipeReducer, initialState);

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
