"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var mongoose_1 = require("mongoose");
var contactRoutes_1 = require("./routes/contactRoutes");
var dotenv = require("dotenv");
var express = require("express");
var cors = require("cors");
var app = express();
var PORT = 3001;
dotenv.config();
app.use(bodyParser.json());
app.use(cors());
mongoose_1.default.Promise = Promise;
mongoose_1.default.connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose_1.default.connection.on('error', function (error) { return console.log(error); });
app.get('/', function (request, response) {
    response.send('Phone Book API is running!');
});
app.use('/contacts', contactRoutes_1.default);
app.use(function (error, request, response, next) {
    response.status(500).send('Something went wrong!');
});
app.listen(PORT, function () {
    console.log("Server is running on http://localhost:".concat(PORT));
});
