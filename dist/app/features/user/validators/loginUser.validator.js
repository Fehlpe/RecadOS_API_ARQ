"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserValidator = void 0;
const http_helper_1 = require("../../../shared/util/http.helper");
const loginUserValidator = (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email)
            return http_helper_1.HttpHelper.badRequest(res, "Email not provided", 404);
        if (!password)
            return http_helper_1.HttpHelper.badRequest(res, "Password not provided", 404);
        return next();
    }
    catch (error) {
        return http_helper_1.HttpHelper.serverError(res, error.toString());
    }
};
exports.loginUserValidator = loginUserValidator;
