import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../store';

const mapStateToProps = ({ sessionReducer }) => ({ sessionReducer });

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(props => (
  <>
    <h2>抓牌页面</h2>
    { Boolean(props.sessionReducer) && <button type="button" onClick={() => props.logOut()}>退出</button> }
  </>
));
