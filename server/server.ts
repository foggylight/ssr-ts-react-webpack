import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 4000;

app.get(/\.(js|css|map|ico)$/, express.static(path.resolve(__dirname, '../public')));
app.use('*', (request, response) => {
  const indexHTML = fs.readFileSync(path.resolve(__dirname, '../public/index.html'));

  response.contentType('text/html').status(200).send(indexHTML);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});
