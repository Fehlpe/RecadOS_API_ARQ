"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnarchiveNoteUseCase = void 0;
class UnarchiveNoteUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(data) {
        const result = await this.repository.unarchiveNote(data.noteId.toString());
        return result;
    }
}
exports.UnarchiveNoteUseCase = UnarchiveNoteUseCase;
