import express from "express";
import dotenv from "dotenv";
import routes from './routes/routes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/lab', routes);

app.get("/", (req, res)=>(res.send("Welcome to server")))

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});