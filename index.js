import { timestamp } from 'drizzle-orm/gel-core';
import express from 'express';
import Utilis from './BackEnd/scripts/utilis.js';

const utilis = new Utilis();
const app = express();
const PORT = process.env.PORT ?? 8000;

app.get('/', (req, res) => {
    return res.json({status: "Server is running...",message:" Welcome to the URL Shortening API",statusCode: 200,timestamp: utilis.getCurrentTimestamp()});
});

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
})

app.post('/shorten', (req, res) => {
    // Logic to shorten URL will go here
    return res.json({url: "shortened_url_here",statusCode: 201,timestamp: utilis.getCurrentTimestamp()});
})