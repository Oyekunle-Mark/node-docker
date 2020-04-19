const express = require('express');

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
server.get('*', (_, res) => res.status(404).send(notFound));

server.listen(3000, () => console.log('Server listening on port 3000'));
