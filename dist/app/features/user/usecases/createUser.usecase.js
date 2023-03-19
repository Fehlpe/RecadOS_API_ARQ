"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const user_model_1 = require("../../../models/user.model");
class CreateUserUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(data) {
        const user = new user_model_1.User(data.username, data.password, data.email);
        const result = await this.repository.createUser(user);
        return result;
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
