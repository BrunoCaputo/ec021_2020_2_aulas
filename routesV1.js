const { Router } = require("restify-router");
const ToddyControllerV1 = require("./controllers/toddyControllerV1");

const routerInstance = new Router();

routerInstance.post("/toddy", ToddyControllerV1.create);
routerInstance.patch("/toddy/:id", ToddyControllerV1.update);
routerInstance.get("/toddy", ToddyControllerV1.search);
routerInstance.del("/toddy/:id", ToddyControllerV1.remove);

module.exports = routerInstance;
