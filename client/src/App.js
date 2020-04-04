import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/header/Header';
import './App.css';
import Login from './pages/Login/Login';
import Recipes from './pages/Recipes/Recipes'
import AddRecipeForm from './pages/AddRecipeForm/AddRecipeForm';
import Dashboard from './pages/Dashboard/Dashboard';
import AuthState from './components/context/auth/AuthState';
export const App = () => {
  return (
    <AuthState>
    <Router>
    <Switch>
    <Route exact path ="/" component = {Header}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/register" component={Login}/>
    <Route exact path="/recipes" component={Recipes}/>
    <Route exact path="/addRecipe" component={AddRecipeForm}/>
    <Route exact path='/dashboard' component={Dashboard}/>
    </Switch>
   
    <div>
     
    </div>
 </Router>
</AuthState>
  );
};

export default App;
