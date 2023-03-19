"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserUsecase = void 0;
class LoginUserUsecase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(data) {
        const result = await this.repository.loginUser(data.email, data.password);
        return result;
    }
}
exports.LoginUserUsecase = LoginUserUsecase;
