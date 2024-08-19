import express from "express";
import path from "path";
import cors from "cors";

const app = express();
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const port = 5000;
app.listen(process.env.PORT || port, () => {
  console.log("Website served on http://localhost:" + port);
});
