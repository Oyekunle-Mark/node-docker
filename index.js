const express = require('express');
const mongoose = require('mongoose');
const languages = require('./data');

const server = express();
const message = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Express Server</title>
  </head>
  <body>
    <h1>Hello from a Docker container!</h1>
  </body>
</html>
`;

const notFound = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Express Server</title>
  </head>
  <body>
    <h1>404 - Not Found!</h1>
  </body>
</html>
`;

server.get('/', (_, res) => res.status(200).send(message));
server.get('/languages', async (_, res) => {
  const langs = await languages.find({});

  return res.status(200).json(langs);
});
server.get('*', (_, res) => res.status(404).send(notFound));

mongoose
  .connect('mongodb://localhost:27017/node_docker_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    server.listen(process.env.PORT, () =>
      console.log('Server listening on port 3000'),
    ),
  )
  .catch((err) => console.log('Failed to start server with error: ', err));
