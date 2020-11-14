const { Router } = require("restify-router");
const ToddyControllerV1 = require("./controllers/toddyControllerV1");
const AuthControllerV1 = require("./controllers/authControllerV1");

const routerInstance = new Router();

routerInstance.post(
    "/toddy",
    AuthControllerV1.validateToken,
    ToddyControllerV1.create
);
routerInstance.patch(
    "/toddy/:id",
    AuthControllerV1.validateToken,
    ToddyControllerV1.update
);
routerInstance.get(
    "/toddy",
    AuthControllerV1.validateToken,
    ToddyControllerV1.search
);
routerInstance.del(
    "/toddy/:id",
    AuthControllerV1.validateToken,
    ToddyControllerV1.remove
);

module.exports = routerInstance;
