const { Router } = require("restify-router");
const ApiControllerV1 = require("./controllers/apiControllerV1");

const routerInstance = new Router();

routerInstance.post("/toddy", ApiControllerV1.create);
routerInstance.patch("/toddy/:id", ApiControllerV1.update);
routerInstance.get("/toddy", ApiControllerV1.search);

module.exports = routerInstance;
