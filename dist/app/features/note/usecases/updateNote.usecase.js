"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNoteUseCase = void 0;
class UpdateNoteUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(dataBody, dataParams) {
        const note = {
            noteTitle: dataBody.noteTitle,
            noteDescription: dataBody.noteDescription,
        };
        const noteId = dataParams.noteId.toString();
        const result = await this.repository.updateNote(note, noteId);
        return result;
    }
}
exports.UpdateNoteUseCase = UpdateNoteUseCase;
