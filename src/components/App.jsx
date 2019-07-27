import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

import Header from './Header.jsx';
import Home from './Home.jsx';
import Zhuapai from './Zhuapai.jsx';
import Kanpai from './Kanpai.jsx';
import Xipai from './Xipai.jsx';
import Mapai from './Mapai.jsx';

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
          <Route path="/" exact component={Home} />
          <Route path="/Zhuapai" exact component={Zhuapai} />
          <Route path="/Kanpai" exact component={Kanpai} />
          <Route path="/Xipai" exact component={Xipai} />
          <Route path="/Mapai" exact component={Mapai} />
        </Switch>
      </div>
    );
  }
}
