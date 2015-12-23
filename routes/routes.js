var ChatModel = require("../models/chatmodel");

var appRouter = function(app) {

    app.get("/fetch", function(req, res) {
        ChatModel.getAll(function(error, result) {
            if(error) {
                return res.status(400).send(error);
            }
            return res.send(result);
        });
    });

};

module.exports = appRouter;
