
const fs = require('fs');
const express = require("express")
const PORT = process.env.PORT || 3000
const app = express()
const routes = require("./routes")
const bodyParser = require('body-parser');

app.use(express.static("client/app"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes)


app.listen(PORT, () => {
  console.log("App running on port " + PORT + "!");
})
