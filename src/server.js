// 因为是服务端渲染肯定要先引入 http
import Koa from 'koa';
import Router from 'koa-router';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './components/App.jsx';

const app = new Koa();
const router = new Router();

const conf = {
  PORT: 9999,
};

const generateHtmlStr = reactDom => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>

    <div id="app">${reactDom}</div>
</body>
</html>
`;

router.get('*', (ctx) => {
  // 首先把 React 组件变成一个字符串
  // eslint-disable-next-line
  const rNode = renderToString(<App />);
  // 然后替换 template 里边的内容
  const domString = generateHtmlStr(rNode);

  // 最后返回 html 字符串
  ctx.body = domString;
});

app.use(router.routes(), router.allowedMethods());

app.listen(conf.PORT, () => {
  console.log(`The Server is listening on ${conf.PORT} now, enjoy`);
});
