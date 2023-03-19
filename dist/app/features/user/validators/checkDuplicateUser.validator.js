"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkDuplicateUserValidator = void 0;
const http_helper_1 = require("../../../shared/util/http.helper");
const user_repository_1 = require("../repositories/user.repository");
const findUserByEmail_usecase_1 = require("../usecases/findUserByEmail.usecase");
const checkDuplicateUserValidator = async (req, res, next) => {
    try {
        const { email } = req.body;
        const usecase = new findUserByEmail_usecase_1.FindUserByEmail(new user_repository_1.UserRepository());
        const result = await usecase.execute(email);
        if (!result) {
            return next();
        }
        return http_helper_1.HttpHelper.badRequest(res, `${email} already registered`, 409);
    }
    catch (error) {
        return http_helper_1.HttpHelper.serverError(res, error.toString());
    }
};
exports.checkDuplicateUserValidator = checkDuplicateUserValidator;
