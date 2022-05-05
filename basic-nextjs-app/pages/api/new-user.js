import { MongoClient } from "mongodb";

// /api/new-user
// POST /api/new-user

async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const data = req.body;

      const client = await MongoClient.connect(
        "mongodb://mongo:27017/somedb?retryWrites=true&w=majority"
      );
      const db = client.db();

      const usersCollection = db.collection("users");

      const result = await usersCollection.insertOne(data);

      console.log(result);

      client.close();

      res.status(201).json({ message: "User inserted!" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
}

export default handler; // function name can be anything

// Next.js makes it easy to build a backend API along with front-end React app in the same project by using API routes
// API routes are special pages which don't return HTML, but accept incoming HTTP requests and perform actions on them
// they contain server-side code which act as API endpoints
// file names in API folder act as path routes
