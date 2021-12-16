import { MongoClient } from 'mongodb';

export async function connectDatabase() {
  const connectingString = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTERNAME}.gev1u.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;

  const client = await MongoClient.connect(connectingString);

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();

  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
}
