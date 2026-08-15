"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAlreadyExistsError = exports.InvalidCredentialsError = void 0;
class InvalidCredentialsError extends Error {
    constructor() {
        super("Invalid credentials");
    }
}
exports.InvalidCredentialsError = InvalidCredentialsError;
class UserAlreadyExistsError extends Error {
    constructor() {
        super("User already exists");
    }
}
exports.UserAlreadyExistsError = UserAlreadyExistsError;
//# sourceMappingURL=errors.js.map