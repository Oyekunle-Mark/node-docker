const express = require('express');
const connectDb = require('./connect');
const { User, users } = require('./data');

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

server.get('/players', async (_, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

server.get('/seed_players', async (_, res) => {
  const createdUsers = await User.insertMany(users);

  res.status(200).json(`Users created: ${createdUsers} \n`);
});

server.get('*', (_, res) => res.status(404).send(notFound));

connectDb()
  .then(() =>
    server.listen(process.env.PORT, () =>
      console.log(`Server listening on port ${process.env.PORT}`),
    ),
  )
  .catch((err) => console.error('Failed to start the server: ', err));
