import express from "express"
import * as dotenv from "dotenv"
import fetch from 'node-fetch';
import cors from "cors"

dotenv.config()

const app = express()

const api_key = process.env.VITE_API_KEY;
const port = process.env.VITE_PORT || 3001;

app.use(cors())

app.get("/api/weather", (req, res) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=Istanbul&aqi=no`;
    fetch(url)
        .then(response => response.json())
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(500).send("Verileri alırken bir hata oluştu.");
        });
});

app.listen(port, () => console.log(`Sunucu ${port} portunu dinliyor`))
