const { request } = require("express");
const express = require("express");
const router = require("./routers/men");

require("./db/conn");
const MensRanking = require("./models/mens");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);




app.listen(port, () => {
    console.log(`connection is live on port number.${port}`);
})