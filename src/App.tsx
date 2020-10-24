import React from 'react';
import Home from './home/home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserId from './users/userId';
import UsersComponent from './users/users';
import ListComponent from './list/list';
import Weekly from './weekly/weekly';
import Signup from './Auth/signup';
import Login from './Auth/login';
import 'animate.css';
import './fonts.css'

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/users" component={UsersComponent} />
          <Route path="/users/:id" component={UserId} />
          <Route path="/lists/:id" component={ListComponent} />
          <Route path="/weekly/:id" component={Weekly} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
    </BrowserRouter>
  )
}

export default App;
