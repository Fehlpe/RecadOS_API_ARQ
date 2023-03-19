"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUserByUserName = void 0;
class FindUserByUserName {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(username) {
        const result = await this.repository.getByUserName(username);
        if (!result) {
            return null;
        }
        return result.toJson();
    }
}
exports.FindUserByUserName = FindUserByUserName;
