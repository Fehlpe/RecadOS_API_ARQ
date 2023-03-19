"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserNotesUseCase = void 0;
class GetUserNotesUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(data) {
        const userId = data.userId.toString();
        const result = await this.repository.getNotes(userId);
        return result;
    }
}
exports.GetUserNotesUseCase = GetUserNotesUseCase;
