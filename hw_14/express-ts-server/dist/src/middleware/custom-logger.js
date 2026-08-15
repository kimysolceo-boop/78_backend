"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customLogger = void 0;
const customLogger = (req, _res, next) => {
    const method = req.method;
    const url = req.url;
    console.log(`${method} - ${url}`);
    //   Функция next не позволяет остановить процесс после того, как
    // сработал middleware, если её не использовать, то клиент не получит ответ
    next();
};
exports.customLogger = customLogger;
//# sourceMappingURL=custom-logger.js.map