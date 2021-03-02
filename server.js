const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/login", (req, res) => {
    if (req.body.email === "saber@gmail.com" && req.body.password === "test") {
        res.send({
            token: "test123",
        });
    } else {
        res.send({
            error: "verify credentials",
        });
    }
});

app.listen(8080, () =>
    console.log("API is running on http://localhost:8080/login")
);
