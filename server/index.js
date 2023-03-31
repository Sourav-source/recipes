import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./src/routes/user.js";
import { recipesRouter } from "./src/routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

// "mongodb+srv://satpatisourav126:Qwer4321@recipes.k5lu3mi.mongodb.net/recipes?retryWrites=true&w=majority",
mongoose.connect(
    "mongodb+srv://satpatisourav126:Qwer4321@recipes.k5lu3mi.mongodb.net/recipes?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

app.listen(3001, () => {
  console.log("Server Started");
});
