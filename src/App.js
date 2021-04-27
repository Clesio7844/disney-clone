import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/'>
            <Login />
          </Route>
          {/* <Route path='/users'>
              <Users />
            </Route>
            <Route path='/'>
              <Home />
            </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
