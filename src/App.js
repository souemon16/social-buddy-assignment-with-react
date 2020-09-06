import React from 'react';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostDetails from './components/PostDetails/PostDetails';
import Notfound from './components/Notfound/Notfound';


function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/profile/:id'>
            <PostDetails />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
              <Notfound/>
            </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
