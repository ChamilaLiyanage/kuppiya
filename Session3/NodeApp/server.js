'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const POD_IP = process.env.MY_POD_IP || HOST;
const APP_NAME = process.env.MY_APP_NAME || 'A app has no name';

// App
const app = express();
app.get('/healthz', (req, res) => {
    res.send('OK');
});

app.get('/', (req, res) => {
    res.send('Hello From ' + APP_NAME + ' on IP ' + POD_IP);
});

app.get('*', (req, res) => {
    res.send('Hello From ' + APP_NAME + ' on IP ' + POD_IP);
});

app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);