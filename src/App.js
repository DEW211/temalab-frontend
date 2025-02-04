import React from 'react';
import SignIn from './Components/Login/SignInClass'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import DashboardWrapper from './Components/Dashboard/DashboardWrapper'



function App() {
  return (
    <Router>
    <div>
      

      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Switch>
       
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route path="/dashboard">
          <DashboardWrapper />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
