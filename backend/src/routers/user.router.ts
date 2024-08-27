import { Router } from "express";
import { users } from "../data";
import expressAsyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/user.model";

const router = Router();

// seed
router.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    const userCount = await UserModel.countDocuments();
    if (userCount > 0) {
      res.send("Seed is already Done!");
      return;
    }

    await UserModel.create(users);
    res.send("Seed is Done");
  })
);

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    res.send(generateTokenResponse(user));
  } else {
    res.status(400).send("Username or Password is not valid");
  }
});

const generateTokenResponse = (user: any) => {
  const token = jwt.sign(
    {
      username: user.username,
      role: user.role,
    },
    "SomeRandomText",
    {
      expiresIn: "60d",
    }
  );

  user.token = token;
  return user;
};

export default router;
