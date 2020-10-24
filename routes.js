const { Router } = require("restify-router");
const ToddyController = require("./controllers/toddyController");

const routerInstance = new Router();

routerInstance.post("/toddy", ToddyController.create);
routerInstance.patch("/toddy/:id", ToddyController.update);
routerInstance.get("/toddy", ToddyController.search);
routerInstance.del("/toddy/:id", ToddyController.remove);

module.exports = routerInstance;
