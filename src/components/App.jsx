import React from 'react';
import { Switch, Route } from 'react-router-dom';
import router from '../router';

import Header from './Header.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ssr-show">
        <Header />
        <Switch>
          {
            router.map(route => <Route key={route.path} {...route} />)
          }
        </Switch>
      </div>
    );
  }
}
