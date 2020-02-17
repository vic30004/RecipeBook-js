import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/header/Header';
import './App.css';
import Login from './pages/Login/Login';
import Recipes from './pages/Recipes/Recipes'
export const App = () => {
  return (
    <Router>
    <Switch>
    <Route exact path ="/" component = {Header}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/register" component={Login}/>
    <Route exact path="/recipes" component={Recipes}/>
    </Switch>
   
    <div>
     
    </div>
 </Router>

  );
};

export default App;
