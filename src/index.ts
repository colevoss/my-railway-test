import { createServer, IncomingMessage, ServerResponse } from 'http';

const PORT = process.env.PORT || 8080;

const requestListener = (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200);
  console.log('Request!');
  res.end('Hello, World!');
};

const server = createServer(requestListener);

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
