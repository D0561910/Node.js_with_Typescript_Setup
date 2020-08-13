"use strict";
exports.__esModule = true;
var express_1 = require("express");
var handlers_1 = require("./handlers");
var app = express_1["default"]();
var port = process.env.PORT || '8000';
app.get('/', handlers_1.rootHandler);
app.get('/hello/:name', handlers_1.helloHandler);
app.listen(port, function (err) {
    if (err)
        return console.error(err);
    return console.log("Server is listening on " + port);
});
