import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = ({ sessionReducer }) => ({ sessionReducer });

// 这样写是为了方便调试
const Header = props => (
  <div>
    <h1>欢迎来到澳门皇冠赌场</h1>
    <NavLink to="/">首页</NavLink>
    { Boolean(props.sessionReducer) && <NavLink to="/Zhuapai">抓牌</NavLink> }
    <NavLink to="/Kanpai">看牌</NavLink>
    <NavLink to="/Xipai">洗牌</NavLink>
    <NavLink to="/Mapai">码牌</NavLink>
  </div>
);

export default connect(mapStateToProps)(Header);
