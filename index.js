require('@babel/register')({
  presets: ['@babel/env', '@babel/react'],
});
require('babel-polyfill');
require('./src/server');
