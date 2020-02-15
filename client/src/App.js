import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/header/Header';
import './App.css';
import Login from './pages/Login/Login';
export const App = () => {
  return (
    <Router>
    <Switch>
    <Route exact path ="/" component = {Header}/>
    <Route exact path="/login" component={Login}/>
    </Switch>
   
    <div>
     
    </div>
 </Router>

  );
};

export default App;
