/**
 * To setup a websocket connection, and nothing more.
 */
    "use strict";

    let websocket;
    let url         = document.getElementById("connect_url");
    let connect     = document.getElementById("connect");
    let protocol    = document.getElementById("protocol");
    let sendMessage = document.getElementById("send_message");
    let message     = document.getElementById("message");
    let close       = document.getElementById("close");
    let output      = document.getElementById("output");
    let name     = document.getElementById("name_id");



    /**
     * Log output to web browser.
     *
     * @param  {string} message to output in the browser window.
     *
     * @return {void}
     */
    function outputLog(message) {
        let now = new Date();
        let timestamp = now.toLocaleTimeString();

        output.innerHTML += `${timestamp} ${message}<br>`;
        output.scrollTop = output.scrollHeight;
    }



    /**
     * Creates the structure of the JSON object
     * @param  {string} message is the message the user typed in.
     */
    let sendText = (message) => {

        let name2 = name.value;
        let msg = {
            "type": "message",
            "text": message,
            "id": name2,
            "date": Date.now()
        }

        websocket.send(JSON.stringify(msg));
    }



    /**
     * Select what subprotocol to use for websocekt connection.
     *
     * @return {string} with name of subprotocol.
     */
    function setSubProtocol() {
        return protocol.value;
    }



    /**
     * What to do when user clicks Connect
     */
    connect.addEventListener("click", (/*event*/) => {
        console.log("Connecting to: " + url.value);
        if (name.value == "") {
            alert("Nickname is required");
            return false;
        }
        if (!protocol.value) {
            websocket = new WebSocket(url.value);
        } else {
            websocket = new WebSocket(url.value, setSubProtocol());
        }

        websocket.onopen = () => {
            console.log("The websocket is now open using '" + websocket.protocol + "'.");
            console.log(websocket);
            outputLog("Connected using '" + websocket.protocol + "' as " + name.value + ".");
        };

        websocket.onmessage = (event) => {
            console.log("Receiving message: " + event.data);
            console.log(event);
            console.log(websocket);

            if (protocol.value == "json") {
                let textF = "";
                try {
                    let msg = JSON.parse(event.data);
                    let prsMsg = JSON.parse(msg.data);
                    let id = prsMsg.id;
                    let text = prsMsg.text;

                    textF = id + ": " + text;
                    outputLog(textF);
                } catch (e) {
                    console.log(e);
                }
            } else if (protocol.value == "text") {

                let textF = "";
                let msg = JSON.parse(event.data);
                let id = msg.id;
                let text = msg.text;

                textF = id + ": " + text;
                outputLog(textF);
            }
        };

        websocket.onclose = () => {
            console.log("The websocket is now closed.");
            console.log(websocket);
            outputLog("Websocket is now closed.");
        };
    }, false);




    // /**
    //  * What to do when user clicks to send a message.
    //  */
    // sendMessage.addEventListener("click", function(/*event*/) {
    //     let messageText = message.value;
    //
    //     if (!websocket || websocket.readyState === 3) {
    //         console.log("The websocket is not connected to a server.");
    //     } else {
    //         websocket.send(messageText);
    //         console.log("Sending message: " + messageText);
    //         outputLog("You said: " + messageText);
    //     }
    // });
    /**
     * What to do when user clicks to send a message.
     */
    sendMessage.addEventListener("click", (/*event*/) => {

        let messageText = message.value;


        if (!websocket || websocket.readyState === 3) {
            console.log("The websocket is not connected to a server.");
        } else {
            sendText(messageText);
            console.log("Sending message: " + messageText);
            outputLog("You said: " + messageText);
            message.value = "";
        }
    });


    message.addEventListener('keypress', (e) => {
        var key = e.which || e.keyCode;
        if (key === 13) { // 13 is enter
            let messageText = message.value;


            if (!websocket || websocket.readyState === 3) {
                console.log("The websocket is not connected to a server.");
            } else {
                sendText(messageText);
                console.log("Sending message: " + messageText);
                outputLog("You said: " + messageText);
                message.value = "";
            }
        }
    });

    /**
     * What to do when user clicks Close connection.
     */
    close.addEventListener("click", (event) => {
        console.log("Closing websocket.");
        websocket.send("Client closing connection by intention.");
        websocket.close();
        console.log(websocket);
        outputLog("Prepare to close websocket.");
    });
