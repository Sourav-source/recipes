import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();
import { UserModel } from "../models/Users.js";

router.post("/register", async (req, res) => {
  //   let newUser = new UserModel({
  //     username: req.body.username,
  //     password: req.body.password,
  //   });
  //   newUser = await newUser.save();
  //   res.status(200).json(newUser);
  const { username, password } = req.body;
  // console.log(req.body)

  const user = await UserModel.findOne({ username: username });
  // console.log(user)
  if (user) {
    return res.json({ message: "Username already exists!" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new UserModel({
    username: username,
    password: hashedPassword,
  });
  await newUser.save();

  res.json({ message: "User Registered Successfully!" });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username: username });

  if (!user) {
    return res.json({ message: "User does not exist!" });
  }

  // const isPasswordValid = await bcrypt.compare(
  //   { password: password },
  //   { password: user.password }
  // );

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.json({ message: "UserName or Password does not match" });
  }

  const token = jwt.sign({ id: user._id }, "secret");
  res.json({ token, userID: user._id });
});

// module.exports = router;

// export default router;

export { router as userRouter };
