"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNoteUseCase = void 0;
const note_model_1 = require("../../../models/note.model");
class CreateNoteUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(data) {
        const note = new note_model_1.Note(data.title, data.description, data.userId);
        const result = await this.repository.createNote(note);
        return result;
    }
}
exports.CreateNoteUseCase = CreateNoteUseCase;
