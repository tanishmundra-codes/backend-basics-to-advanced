import express from "express";
import { configDotenv } from "dotenv";

const app = express();

const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("App is running");
})

app.listen(PORT, () => {
    console.log(`Server is started at ${PORT}`)
})