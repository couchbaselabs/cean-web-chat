var express = require("express");
var bodyParser = require("body-parser");
var couchbase = require("couchbase");
var path = require("path");
var config = require("./config");
var app = express();

var server = require("http").Server(app);
var io = require("socket.io").listen(server);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

module.exports.bucket = (new couchbase.Cluster(config.couchbase.server)).openBucket(config.couchbase.bucket);

app.use(express.static(path.join(__dirname, "public")));
app.use("/scripts", express.static(__dirname + "/node_modules/"));

var routes = require("./routes/routes.js")(app);
var ChatModel = require("./models/chatmodel.js");

io.on("connection", function(socket){
    socket.on("chat_message", function(msg){
        ChatModel.create({message: msg}, function(error, result) {
            if(error) {
                console.log(JSON.stringify(error));
            }
            io.emit("chat_message", msg);
        });
    });
});

server.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});
