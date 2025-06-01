// apps/backend/main.js
const express = require('express');
const app = express();
const port = 3001;

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.listen(port, () => {
    console.log(`Backend server running on http://localhost:${port}`);
});