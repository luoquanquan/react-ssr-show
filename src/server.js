import path from 'path';
import Koa from 'koa';
import Router from 'koa-router';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import serve from 'koa-static';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import createStore, { init } from './store';
import routes from './router';

const app = new Koa();
const router = new Router();

const conf = {
  PORT: 9999,
};

const generateHtmlStr = (reactDom, reduxState) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>

    <div id="app">${reactDom}</div>
    <script>
      window.REDUX_DATA = ${JSON.stringify(reduxState)}
    </script>
    <script src="/dist/bundle.js"></script>
</body>
</html>
`;

router.get('*', async (ctx) => {
  const context = {};
  const { url } = ctx.req;
  const store = createStore();
  // 初始化 store
  store.dispatch(init());

  // 获取首屏情况下的状态
  const reduxState = store.getState();

  // 初始化时是否需要访问异步接口
  // 首先找到当前路由, 对应的组件
  const dataRequireMents = routes.filter(page => matchPath(ctx.req.url, page))
    // 把路由匹配的结果对应的组件拿出来
    .map(page => page.component)
    // 把定义了 serverFetch 静态方法的组件过滤出来
    .filter(comp => comp.serverFetch)
    // 嗯哼...
    .map(comp => store.dispatch(comp.serverFetch()));

  // 等...
  if (dataRequireMents.length) await Promise.all(dataRequireMents);

  // 首先把 React 组件变成一个字符串
  // eslint-disable-next-line
  const rNode = renderToString(
    <Provider store={store}>
      <StaticRouter location={url} context={context}>
        <App />
      </StaticRouter>
    </Provider>,
  );
  // 然后替换 template 里边的内容
  const domString = generateHtmlStr(rNode, reduxState);

  // 最后返回 html 字符串
  ctx.body = domString;
});

app.use(serve(path.resolve(__dirname, '../')));
app.use(router.routes(), router.allowedMethods());

app.listen(conf.PORT, () => {
  console.log(`The Server is listening on ${conf.PORT} now, enjoy`);
});
