const express = require('express');
const http = require('http');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Ping Service Running');
});

app.listen(port, () => {
    console.log(`Ping Service is running on port ${port}`);
});

const your_website_url = 'https://retro-bazaar.onrender.com/';
const your_website_url2 = 'https://findmyverto.onrender.com/';

setInterval(() => {
    http.get(your_website_url);
    http.get(your_website_url2);
}, 600000); // 600000 ms is 10 minutes
