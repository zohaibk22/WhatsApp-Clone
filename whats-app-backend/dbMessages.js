import mongoose from "mongoose";

//Data schema

const whatsAppSchema = mongoose.Schema({
  message: String,
  name: String,
  timestamp: String,
  received: Boolean,
});

//giving a name to our collection
export default mongoose.model("messagecontents", whatsAppSchema);
