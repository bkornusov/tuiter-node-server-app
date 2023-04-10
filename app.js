import express from "express";
import cors from "cors";
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import mongoose from "mongoose";
const app = express();
app.use(express.json());
app.use(cors());
const CONNECTION_STRING =
  "mongodb+srv://bkornusov:WebDevPassword@webdev.waqrhkl.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(CONNECTION_STRING);
TuitsController(app);
HelloController(app);
UserController(app);
app.listen(process.env.PORT || 4000);
