// api/index.js
import app from '../Server.js';
import { createServer } from 'http';

export default function handler(req, res) {
  const server = createServer(app);
  server.listen();
  server.emit('request', req, res);
}
