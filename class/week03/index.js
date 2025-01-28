import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/item/:itemID", (req, res) => (
    console.log(req.url),
    console.log(req.headers),
    console.log(req.query),
    console.log(req.params),
    console.log(req.body),
    res.send("item")));
app.post("/", (req, res) => res.send("Welcome to - POST"));
app.put("/", (req, res) => res.send("Welcome to - PUT"));
app.delete("/", (req, res) => res.send("Welcome to - DELETE"));

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
