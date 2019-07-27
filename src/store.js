import { createStore } from 'redux';

// actionTypes
// session
const INIT = 'INIT';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';


// actionsCreaters
export const init = () => ({ type: INIT });
export const logIn = () => ({ type: LOGIN });
export const logOut = () => ({ type: LOGOUT });

// reducers
const sessionReducer = (state = false, action) => {
  const { type } = action;
  switch (type) {
    case INIT:
      return true;
    case LOGIN:
      return true;
    case LOGOUT:
      return false;
    default:
      return state;
  }
};

export default initState => createStore(
  sessionReducer,
  initState,
);
