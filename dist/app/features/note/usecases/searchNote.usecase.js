"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchNoteUseCase = void 0;
class SearchNoteUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(dataParams, dataQuery) {
        const userId = dataParams.userId.toString();
        const query = dataQuery.query.toString();
        const result = await this.repository.searchNote(userId, query);
        return result;
    }
}
exports.SearchNoteUseCase = SearchNoteUseCase;
