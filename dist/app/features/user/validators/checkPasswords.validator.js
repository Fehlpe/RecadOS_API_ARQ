"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPasswordsValidator = void 0;
const http_helper_1 = require("../../../shared/util/http.helper");
const checkPasswordsValidator = (req, res, next) => {
    try {
        const { password, password2 } = req.body;
        if (password !== password2)
            return http_helper_1.HttpHelper.badRequest(res, "Passwords don't match", 401);
        return next();
    }
    catch (error) {
        return http_helper_1.HttpHelper.serverError(res, error.toString());
    }
};
exports.checkPasswordsValidator = checkPasswordsValidator;
