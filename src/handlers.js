"use strict";
exports.__esModule = true;
var helloBuilder = function (name) { return ({ hello: name }); };
exports.rootHandler = function (_req, res) {
    return res.send('API is working 🤓');
};
exports.helloHandler = function (req, res) {
    var params = req.params;
    var _a = params.name, name = _a === void 0 ? 'World' : _a;
    var response = helloBuilder(name);
    return res.json(response);
};
