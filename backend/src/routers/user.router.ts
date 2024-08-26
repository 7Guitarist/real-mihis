import { Router } from "express";
import { users } from "../data";
import jwt from "jsonwebtoken";

const router = Router();

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
