import { MongoClient } from "mongodb";

//only post requests

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://elvira-0:elvira-0@cluster0.2m74irc.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    
    const result = await meetupsCollection.insertOne({ data });
    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
};

export default handler;
