import express from 'express'
import { configDotenv } from 'dotenv';

const port = process.env.PORT || 4000
const app = express();



app.get("/", (req, res) => {
    res.send("hello world")
})

app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id: 1,
            content: "This is a joke"
        },
        {
            id: 2,
            content: "This is another joke"
        },
        {
            id: 3,
            content: "This is third joke"
        },
        {
            id: 4,
            content: "This is fourth joke"
        },
        {
            id: 5,
            content: "This is five joke"
        },
        
    ]

    res.send(jokes)
})

app.listen(port, () => {
    console.log(`Server is started at ${port}`)
})