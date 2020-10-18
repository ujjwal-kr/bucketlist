import React from 'react';
import Home from './home/home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserId from './users/userId';
import UsersComponent from './users/users';
import ListComponent from './list/list';

function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/users" component={UsersComponent} />
          <Route path="/users/:id" component={UserId} />
          <Route path="/lists/:id" component={ListComponent} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
