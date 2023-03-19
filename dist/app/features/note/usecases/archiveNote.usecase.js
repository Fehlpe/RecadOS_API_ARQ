"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArchiveNoteUseCase = void 0;
class ArchiveNoteUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(data) {
        const result = await this.repository.archiveNote(data.noteId.toString());
        return result;
    }
}
exports.ArchiveNoteUseCase = ArchiveNoteUseCase;
