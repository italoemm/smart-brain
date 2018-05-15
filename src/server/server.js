const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/example', (req,resp) => {
        res.send('path')
});

app.listen(3000);