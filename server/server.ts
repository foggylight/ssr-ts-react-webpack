import express from 'express';
import fs from 'fs';
import path from 'path';
import webpack from 'webpack';

const config = require('../webpack.prod');

const app = express();
const port = 4000;

const compiler = webpack(config);

compiler.run((err, stats) => {
  if (err) {
    console.error(err);
    return;
  }

  if (!stats) return;
  const info = stats.toJson();

  if (stats.hasErrors()) {
    console.error(info.errors);
  }

  if (stats.hasWarnings()) {
    console.warn(info.warnings);
  }

  console.log(
    stats.toString({
      colors: true,
    }),
  );

  compiler.close((closeErr) => {
    if (closeErr) {
      console.error(closeErr);
    }
    console.log('Compilation ended');
  });
});

app.get(/\.(js|css|map|ico)$/, express.static(path.resolve(__dirname, '../public')));
app.use('*', (request, response) => {
  const indexHTML = fs.readFileSync(path.resolve(__dirname, '../public/index.html'));

  response.contentType('text/html').status(200).send(indexHTML);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});
