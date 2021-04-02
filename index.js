const express = require('express');
const app = express();
const port = 9000;
app.get('/', (req, res) => {
    res.send('<h5>Welcome to Docker's Demo!</h5>');
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
