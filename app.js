/**
 * Module dependencies.
 */

const express = require('express');
const routes = require('./routes');
const http = require('http');
const path = require('path');
const errorHandler = require('errorhandler');
const logger = require('morgan');
const lessExpress = require('less-express');
const WebSocket = require("ws");

const reactViews = require('express-react-views');

const app = express();

/* HERE IS MONGODB */
const mongo = require("mongodb").MongoClient;
const dsn =  process.env.DBWEBB_DSN || "mongodb://localhost:27017/bankerydare";

/* HERE IS WS */
const server = http.createServer(app);
const wss = new WebSocket.Server({
    server: server,
    clientTracking: true, // keep track on connected clients,
    handleProtocols: handleProtocols // Manage what subprotocol to use.
});

/**
 * Select subprotocol to use for connection.
 *
 * @param {Array} protocols              Subprotocols to choose from, sent
 *                                        by client request.
 * @param {http.IncomingMessage} request The client HTTP GET request.
 *
 * @return {void}
 */
function handleProtocols(protocols /*, request */) {
    console.log(`Incoming protocol requests '${protocols}'.`);
    for (var i=0; i < protocols.length; i++) {
        if (protocols[i] === "text") {
            return "text";
        } else if (protocols[i] === "json") {
            return "json";
        }
    }
    return false;
}



/**
 * Broadcast data to everyone except one self (ws).
 *
 * @param {WebSocket} ws   The current websocket.
 * @param {string}    data The data to send.
 *
 * @return {void}
 */
function broadcastExcept(ws, data) {
    let clients = 0;

    wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
            clients++;
            if (ws.protocol === "json") {
                let msg = {
                    data: data
                };

                client.send(JSON.stringify(msg));
            } else {
                client.send(data);
            }
        }
    });
    console.log(`Broadcasted data to ${clients} (${wss.clients.size}) clients.`);
}



// Setup for websocket requests.
// Docs: https://github.com/websockets/ws/blob/master/doc/ws.md
wss.on("connection", (ws/*, req*/) => {
    console.log("Connection received. Adding client.");

    broadcastExcept(ws, `New client connected (${wss.clients.size}) using '${ws.protocol}'.`);
    //console.log(ws);

    ws.on("message", (message) => {
        console.log("Received: %s", message);
        broadcastExcept(ws, message);
    });

    ws.on("error", (error) => {
        console.log(`Server error: ${error}`);
    });

    ws.on("close", (code, reason) => {
        console.log(`Closing connection: ${code} ${reason}`);
        broadcastExcept(ws, `Client disconnected (${wss.clients.size}).`);
    });
});


/* END OF WS */

// all environments
app.set('port', process.env.DBWEBB_PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(errorHandler());
}

app.locals.something = 'value';
app.locals.qaz = 'qut';

app.get('/css/style.css', lessExpress('./public/stylesheets/style.less'));
app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/report', routes.report);
app.get('/chat', routes.chat);
app.get('/mongodb', routes.db);

app.get('/mongodb/find', routes.find);
app.get('/mongodb/insert/:ob', routes.insert);
app.get('/mongodb/drop', routes.drop);
app.get('/mongodb/edit/:uf/:ut', routes.update);
// Return a JSON object with list of all documents within the collection.
app.get("/list", async (request, response) => {
    try {
        let res = await findInCollection(dsn, "crowd", {}, {}, 0);

        console.log(res);
        response.json(res);
    } catch (err) {
        console.log(err);
        response.json(err);
    }
});


// http.createServer(app).listen(app.get('port'), function() {
//     console.log('Express server listening on port ' + app.get('port'));
// });
// Startup server
server.listen(app.get('port'), () => {
    console.log('Server listening on port ' + app.get('port'));
    console.log(`DSN is: ${dsn}`);
});

async function findInCollection(dsn, colName, criteria, projection, limit) {
    const db  = await mongo.connect(dsn);
    const col = await db.collection(colName);
    const res = await col.find(criteria, projection).limit(limit).toArray();

    await db.close();

    return res;
}
