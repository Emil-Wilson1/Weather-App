import express from "express";
import mongooseConnection from "./src/connection/mongo";
import weatherCity from "./src/routes/weatherCity";
const app = express();

app.use(express.json());
app.use('/', weatherCity);

process.loadEnvFile();
const port = process.env.LISTENING_PORT;

mongooseConnection();

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
