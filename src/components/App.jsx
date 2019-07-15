import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

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
        <h1>欢迎来到澳门皇冠赌场</h1>
        <NavLink to="/">首页</NavLink>
        <NavLink to="/Zhuapai">抓牌</NavLink>
        <NavLink to="/Kanpai">看牌</NavLink>
        <NavLink to="/Xipai">洗牌</NavLink>
        <NavLink to="/Mapai">码牌</NavLink>

        <Switch>
          <Route path="/" component={Home} />
          <Route path="/Zhuapai" component={Zhuapai} />
          <Route path="/Kanpai" component={Kanpai} />
          <Route path="/Xipai" component={Xipai} />
          <Route path="/Mapai" component={Mapai} />
        </Switch>
      </div>
    );
  }
}
