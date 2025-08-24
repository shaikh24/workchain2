// server/backend.js
import { connectMongo } from './src/db/mongo.js';

async function startServer() {
  const client = await connectMongo();
  console.log("MongoDB Atlas Connected!");
}

startServer();
