import { createStore, combineReducers } from 'redux';
import getMockData from './mock';

// actionTypes
// session
const INIT = 'INIT';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

// song
const INITSONG = 'INITSONG';


// actionsCreaters
export const init = () => ({ type: INIT });
export const logIn = () => ({ type: LOGIN });
export const logOut = () => ({ type: LOGOUT });

export const initSongList = list => ({ type: INITSONG, list });

// 把歌曲列表添加到 store 里边
const storeData = list => ({ type: INITSONG, list });

export const fetchData = () => dispatch => getMockData().then(data => dispatch(storeData(data)));

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

const songReducer = (state = [], action) => {
  switch (action.type) {
    case INITSONG:
      return action.list;
    default: return state;
  }
};

const reducer = combineReducers({
  sessionReducer,
  songReducer,
});

export default initState => createStore(
  reducer,
  initState,
);
