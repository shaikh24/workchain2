import { connectMongo } from './db/mongo.js';

async function startServer() {
  const mongoClient = await connectMongo();
  // MongoDB se collections read/write kar sakte ho
}

startServer();
