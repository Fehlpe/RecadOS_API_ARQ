"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllUsers = void 0;
class FindAllUsers {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute() {
        const result = await this.repository.getAll();
        if (!result) {
            return null;
        }
        return result;
    }
}
exports.FindAllUsers = FindAllUsers;
