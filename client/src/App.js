import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import './App.css';
import Login from './pages/Login/Login';
import Recipes from './pages/Recipes/Recipes';
import AddRecipeForm from './pages/AddRecipeForm/AddRecipeForm';
import Dashboard from './pages/Dashboard/Dashboard';
import AuthState from './components/context/auth/AuthState';
import PrivateRoute from './components/Routing/PrivateRoute';
import RecipeState from './components/context/recipes/RecipeState';
import Favorite from './pages/Favorite/Favorite';
import SingleRecipe from './pages/SingleRecipe/SingleRecipe';

export const App = () => {
  return (
    <AuthState>
      <RecipeState>
        <Router>
          <Switch>
            <Route exact path='/' component={Header} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Login} />
            <Route exact path='/recipes' component={Recipes} />
            <PrivateRoute exact path='/addRecipe' component={AddRecipeForm} />
            <Route exact path='/favorite' component={Favorite} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <Route exact path='/recipes/:id' component={SingleRecipe} />
          </Switch>

          <div></div>
        </Router>
      </RecipeState>
    </AuthState>
  );
};

export default App;
