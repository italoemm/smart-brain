/*const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/particlesjs-config', (req,resp) => {
        path = JSON.stringify('./particlesjs-confi.json')
        res.setHeader('Content-Type', 'application/json')
        res.send(path)
});

app.listen(3000);