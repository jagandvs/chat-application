"use strict";

const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const socketEvents = require("./web/socket");
const router = require("./web/routes");
const appConfig = require("./config/app-config");

class App {
  constructor() {
    this.app = express();
    this.http = http.Server(this.app);
    this.socket = socketio(this.http);
  }

  appConfig() {
    new appConfig(this.app).includeConfig();
  }

  /* Including app Routes starts*/
  includeRoutes() {
    this.app.use(router);
    new socketEvents(this.socket).socketConfig();
  }
  /* Including app Routes ends*/

  appExecute() {
    this.appConfig();
    this.includeRoutes();

    const port = process.env.PORT || 3000;
    const host = process.env.HOST || `localhost`;

    this.http.listen(port, host, () => {
      console.log(`Listening on http://${host}:${port}`);
    });
  }
}

const app = new App();
app.appExecute();
