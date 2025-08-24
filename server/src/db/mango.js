import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config({ path: '.envx' });

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

export async function connectMongo() {
  try {
    await client.connect();
    console.log("✅ MongoDB Connected!");
    return client;
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1);
  }
}
