"use strict";
const express = require("express");
const router = express.Router();
const routeHandler = require("./../handlers/route-handler");

/* creating app Routes starts */

router.post("/usernameAvailable", routeHandler.userNameCheckHandler);

router.post("/register", routeHandler.registerRouteHandler);

router.post("/login", routeHandler.loginRouteHandler);

router.post("/userSessionCheck", routeHandler.userSessionCheckRouteHandler);

router.post("/getMessages", routeHandler.getMessagesRouteHandler);

router.get("*", routeHandler.routeNotFoundHandler);

module.exports = router;
