import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login/Login.jsx';
import EnterDatas from './components/enterDatas/EnterDatas.jsx';
import Chart from './components/chart/Chart.jsx';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/data" component={EnterDatas} />

      <Route path="/chart" component={Chart} />
    </Switch>
  </BrowserRouter>
);

export default App;
