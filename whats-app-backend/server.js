//importing

import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";
import Cors from "cors";

//app config
//creating the application and writing api routes
const app = express();
const port = process.env.PORT || 9000;

//Pusher code copied from pusher website => getting started => node.js
const pusher = new Pusher({
  appId: "1114515",
  key: "a1567d0b1bfdc7893def",
  secret: "5ece4486898eab8a2eaf",
  cluster: "us2",
  useTLS: true,
});
//middleware

//allows for json to be created
vscode: app.use(express.json());
app.use(Cors());

//Allowing requests to come from any endpoint
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "*");
//   next();
// });

//database config

let connectionUrl =
  "mongodb+srv://admin:admin@cluster0.jtvgd.mongodb.net/whatsappdb?retryWrites=true&w=majority";

mongoose.connect(connectionUrl, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("DB connected");

  const msgCollection = db.collection("messagecontents");
  const changeStream = msgCollection.watch();
  console.log(msgCollection);

  changeStream.on("change", (change) => {
    console.log("change occurred", change);

    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("message", "inserted", {
        name: messageDetails.user,
        message: messageDetails.message,
      });
    } else {
      console.log("error triggering pusher");
    }
  });
});

//api routes

app.get("/", (req, res) => res.status(200).send("Hello World"));

app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      //internal server error
      res.status(500).send(err);
    } else {
      res.status(201).send(`new message created: \n ${data}`);
    }
  });
});

//listener

app.listen(port, () => console.log(`Listening on Local Host ${port}`));
