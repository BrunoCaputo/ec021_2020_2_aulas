const { Router } = require("restify-router");
const AuthControllerV1 = require("./controllers/authControllerV1");

const routerInstance = new Router();

routerInstance.post("/login", AuthControllerV1.login);

module.exports = routerInstance;
