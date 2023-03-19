"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUserByEmail = void 0;
class FindUserByEmail {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(email) {
        const result = await this.repository.getByEmail(email);
        if (!result) {
            return null;
        }
        return result.toJson();
    }
}
exports.FindUserByEmail = FindUserByEmail;
