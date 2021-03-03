import dotenv from 'dotenv'
import Server from './models/server';

// Configuration of dotenv
dotenv.config();

// Start the server
const server = new Server();
server.listen();
