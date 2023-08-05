const express = require('express');
require('./db/conn');
const app = express();
const router1 = require('./routers/mensRoute');
const router2 = require('./routers/commentRoute');
app.use(express.json());
const port = process.env.port || 3000;

app.use(router1);
app.use(router2)


app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})