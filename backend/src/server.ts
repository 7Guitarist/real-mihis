import express from "express";
import path from "path";
import cors from "cors";
import { child, users } from "./data";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

// get child
app.get("/api/child", (req, res) => {
  res.send(child);
});

app.get("/api/children-page/:id", (req, res) => {
  const childId = req.params.id;
  const childProfile = child.find((children) => children.id === childId);
  res.send(childProfile);
});

app.post("/api/users/login", (req, res) => {
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

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Website served on http://localhost:${port}`);
});
