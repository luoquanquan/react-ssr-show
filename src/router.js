import Home from './components/Home.jsx';
import Zhuapai from './components/Zhuapai.jsx';
import Kanpai from './components/Kanpai.jsx';
import Xipai from './components/Xipai.jsx';
import Mapai from './components/Mapai.jsx';

export default [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/Zhuapai',
    component: Zhuapai,
    exact: true,
  },
  {
    path: '/Kanpai',
    component: Kanpai,
    exact: true,
  },
  {
    path: '/Xipai',
    component: Xipai,
    exact: true,
  },
  {
    path: '/Mapai',
    component: Mapai,
    exact: true,
  },
];
