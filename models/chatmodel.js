var uuid = require("uuid");
var db = require("../app").bucket;
var config = require("../config");
var N1qlQuery = require('couchbase').N1qlQuery;

function ChatModel() { };

ChatModel.create = function(data, callback) {
    var chatMessage = {
        id: uuid.v4(),
        message: data.message
    };
    db.insert("chat::" + chatMessage.id, chatMessage, function(error, result) {
        if(error) {
            return callback(error, null);
        }
        return callback(null, result);
    });
}

ChatModel.getAll = function(callback) {
    var statement = "SELECT id, message " +
                    "FROM `" + config.couchbase.bucket + "`";
    var query = N1qlQuery.fromString(statement).consistency(N1qlQuery.Consistency.REQUEST_PLUS);
    db.query(query, function(error, result) {
        if(error) {
            return callback(error, null);
        }
        callback(null, result);
    });
};

module.exports = ChatModel;
