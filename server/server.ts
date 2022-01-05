import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { App } from '../client/App';

const app = express();
const port = 4000;

app.get(/\.(js|css|map|ico)$/, express.static(path.resolve(__dirname, '../public')));
app.use('*', (request, response) => {
  const appHTML = ReactDOMServer.renderToString(React.createElement(App));
  let indexHTML = fs.readFileSync(path.resolve(__dirname, '../public/index.html'), {
    encoding: 'utf8',
  });

  indexHTML = indexHTML.replace('<div id="app"></div>', `<div id="app">${appHTML}</div>`);

  response.contentType('text/html').status(200).send(indexHTML);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});
