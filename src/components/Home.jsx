import React from 'react';


import { connect } from 'react-redux';
import { logIn } from '../store';

const mapStateToProps = ({ sessionReducer }) => ({ sessionReducer });

const mapDispatchToProps = dispatch => ({
  logIn: () => dispatch(logIn()),
});

export default connect(mapStateToProps, mapDispatchToProps)(props => (
  <>
    <h2>首页</h2>
    {Boolean(!props.sessionReducer) && <button type="button" onClick={() => props.logIn()}>登录</button>}
  </>
));
