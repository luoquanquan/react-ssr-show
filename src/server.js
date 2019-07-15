import path from 'path';
import Koa from 'koa';
import Router from 'koa-router';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import serve from 'koa-static';
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
    <script src="/dist/bundle.js"></script>
</body>
</html>
`;

router.get('*', (ctx) => {
  const context = {};
  const { url } = ctx.req;
  // 首先把 React 组件变成一个字符串
  // eslint-disable-next-line
  const rNode = renderToString(
    <StaticRouter location={url} context={context}>
      <App />
    </StaticRouter>,
  );
  // 然后替换 template 里边的内容
  const domString = generateHtmlStr(rNode);

  // 最后返回 html 字符串
  ctx.body = domString;
});

app.use(serve(path.resolve(__dirname, '../')));
app.use(router.routes(), router.allowedMethods());

app.listen(conf.PORT, () => {
  console.log(`The Server is listening on ${conf.PORT} now, enjoy`);
});
