import express from "express";
import path from "path";
import cors from "cors";
import { child } from "./data";

const app = express();
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

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Website served on http://localhost:${port}`);
});
