"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const http_helper_1 = require("../../../shared/util/http.helper");
const user_repository_1 = require("../repositories/user.repository");
const createUser_usecase_1 = require("../usecases/createUser.usecase");
const loginUser_usecase_1 = require("../usecases/loginUser.usecase");
class UserController {
    async create(req, res) {
        try {
            const usecase = new createUser_usecase_1.CreateUserUseCase(new user_repository_1.UserRepository());
            const result = await usecase.execute(req.body);
            return http_helper_1.HttpHelper.sucess(res, result, "User created");
        }
        catch (error) {
            return http_helper_1.HttpHelper.serverError(res, error.toString());
        }
    }
    async login(req, res) {
        try {
            const usecase = new loginUser_usecase_1.LoginUserUsecase(new user_repository_1.UserRepository());
            const result = await usecase.execute(req.body);
            if (!result) {
                return http_helper_1.HttpHelper.badRequest(res, "Incorrect email or password!", 404);
            }
            return http_helper_1.HttpHelper.sucess(res, result, "logged", 201);
        }
        catch (error) {
            return http_helper_1.HttpHelper.serverError(res, error.toString());
        }
    }
}
exports.UserController = UserController;
