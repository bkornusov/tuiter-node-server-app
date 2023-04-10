import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    tuit: String,
    likes: Number,
    liekd: Boolean,
  },
  { collection: "tuits" }
);
export default schema;
