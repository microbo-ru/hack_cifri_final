const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

const fs = require("fs");
const port = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/form_list", function(req, res, next) {
  fs.readFile("./forms.json", (err, json) => {
    res.send(json);
  });
});

app.post("/form_list", function(req, res) {
  console.log(req["body"]);
  fs.writeFile("./forms.json", JSON.stringify(req["body"]), err => {
    if (err) res.sendStatus(500);
    else res.sendStatus(201);
  });
});

app.listen(port, function() {
  console.log(`CORS-enabled web server listening on port ${port}`);
});
