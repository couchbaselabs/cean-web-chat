import {Component, View} from "angular2/core";
import {Http, HTTP_PROVIDERS} from "angular2/http";

declare var io: any;

@Component({
    selector: 'default',
    viewProviders: [HTTP_PROVIDERS]
})

@View({
    templateUrl: 'app/default/default.html'
})

export class DefaultPage {

    messages: Array<String>;
    chatBox: String;
    socket: any;

    constructor(http: Http) {
        this.messages = [];
        http.get("/fetch").subscribe((success) => {
            var data = success.json();
            for(var i = 0; i < data.length; i++) {
                this.messages.push(data[i].message);
            }
        }, (error) => {
            console.log(JSON.stringify(error));
        });
        this.chatBox = "";
        this.socket = io();
        this.socket.on("chat_message", (msg) => {
            this.messages.push(msg);
        });
    }

    send(message) {
        this.socket.emit("chat_message", message);
        this.chatBox = "";
    }
}
