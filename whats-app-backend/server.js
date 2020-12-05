//importing

import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";

//app config
//creating the application and writing api routes
const app = express();
const port = process.env.PORT || 9000;

//middleware

//allows for json to be created
app.use(express.json());

//database config

let connectionUrl =
  "mongodb+srv://admin:admin@cluster0.jtvgd.mongodb.net/whatsappdb?retryWrites=true&w=majority";

mongoose.connect(connectionUrl, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
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
