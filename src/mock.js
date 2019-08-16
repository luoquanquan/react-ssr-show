import axios from 'axios';

export default () => axios('https://music.niubishanshan.top/api/v2/music/toplist')
  .then(({ data: { data } }) => data);
