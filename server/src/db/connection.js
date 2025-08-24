const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI; // password safe way se env file me

const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("MongoDB Atlas Connected!");
    return client;
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

module.exports = connectDB;
