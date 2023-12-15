"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var bodyParser = require("body-parser");
var mongoose_1 = require("mongoose");
var contactRoutes_1 = require("./routes/contactRoutes");
var app = (0, express_1.default)();
var PORT = 3001;
app.use(bodyParser.json());
app.use((0, cors_1.default)());
mongoose_1.default.Promise = Promise;
mongoose_1.default.connect('mongodb+srv://tryelsonmarques:tryelson%40123@node.wbzfjdz.mongodb.net/phonebook?retryWrites=true&w=majority', {
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
