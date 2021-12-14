import { MongoClient } from 'mongodb';

export async function connectDatabase() {
  const connectingString = `mongodb+srv://${mongodb_username}:${mongodb_username}@${monogdb_clustername}.gev1u.mongodb.net/${mongodb_database}?retryWrites=true&w=majority`;

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
