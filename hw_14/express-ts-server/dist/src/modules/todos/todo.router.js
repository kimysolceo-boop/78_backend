"use strict";
// Здесь только маршрутизация
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodoRouter = createTodoRouter;
const express_1 = require("express");
const current_user_middleware_1 = require("../../middleware/current-user.middleware");
function createTodoRouter(controller, userRepo) {
    const router = (0, express_1.Router)();
    router.use((0, current_user_middleware_1.createCurrentUserMiddleware)(userRepo));
    router.get("/", controller.getAll);
    router.post("/", controller.create);
    router.get("/:id", controller.getOne);
    router.delete("/:id", controller.delete);
    router.patch("/:id", controller.updateTitle);
    return router;
}
//# sourceMappingURL=todo.router.js.map