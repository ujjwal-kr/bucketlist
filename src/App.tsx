import React from 'react';
import Home from './home/home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserId from './users/userId';
import UsersComponent from './users/users';
import ListComponent from './list/list';
import Tasks from './weekly/tasks';
import Signup from './Auth/signup';
import Login from './Auth/login';
import CreateList from './list/create';
import CreateTask from './weekly/create';
import 'animate.css';
import './fonts.css'

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />

          <Route path="/users" component={UsersComponent} exact />
          <Route path="/users/:id" component={UserId} />

          <Route path="/lists/:id" component={ListComponent} />
          <Route path="/create-list" component={CreateList} />

          <Route path="/tasks/:id/:code" component={Tasks} />
          <Route path="/create-task" component={CreateTask} />

          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
    </BrowserRouter>
  )
}

export default App;
