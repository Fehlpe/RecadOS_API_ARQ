"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserValidator = void 0;
const http_helper_1 = require("../../../shared/util/http.helper");
const createUserValidator = (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        if (!username)
            return http_helper_1.HttpHelper.badRequest(res, "Username not provided", 400);
        if (!email)
            return http_helper_1.HttpHelper.badRequest(res, "Email not provided", 400);
        if (!password)
            return http_helper_1.HttpHelper.badRequest(res, "Password not provided", 400);
        return next();
    }
    catch (error) {
        return http_helper_1.HttpHelper.serverError(res, error.toString());
    }
};
exports.createUserValidator = createUserValidator;
