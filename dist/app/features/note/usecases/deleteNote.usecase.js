"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteNoteUseCase = void 0;
class DeleteNoteUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(data) {
        const result = await this.repository.deleteNote(data.noteId.toString());
        return result;
    }
}
exports.DeleteNoteUseCase = DeleteNoteUseCase;
