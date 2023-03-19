"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteRepository = void 0;
const typeorm_1 = require("typeorm");
const typeorm_connection_1 = require("../../../../main/database/typeorm.connection");
const note_model_1 = require("../../../models/note.model");
const notes_entity_1 = require("../../../shared/entities/notes.entity");
class NoteRepository {
    _repository = typeorm_connection_1.DataBaseConnection.connection.getRepository(notes_entity_1.NoteEntity);
    async createNote(note) {
        const noteEntity = this._repository.create({
            noteTitle: note.title,
            noteDescription: note.description,
            userId: note.userId,
        });
        const result = await this._repository.save(noteEntity);
        return result;
    }
    async getNotes(userId) {
        const result = await this._repository.find({ where: { userId: userId } });
        return result;
    }
    async updateNote(note, noteId) {
        const oldNote = await this._repository.findOneBy({
            noteId,
        });
        if (!oldNote) {
            return undefined;
        }
        oldNote.noteTitle = note.noteTitle;
        oldNote.noteDescription = note.noteDescription;
        return await this._repository.save(oldNote);
    }
    async deleteNote(noteId) {
        return await this._repository.delete({
            noteId,
        });
    }
    async archiveNote(noteId) {
        const oldNote = await this._repository.findOneBy({
            noteId,
        });
        if (!oldNote) {
            return undefined;
        }
        oldNote.noteArchived = true;
        await this._repository.save(oldNote);
    }
    async unarchiveNote(noteId) {
        const oldNote = await this._repository.findOneBy({
            noteId,
        });
        if (!oldNote) {
            return undefined;
        }
        oldNote.noteArchived = false;
        await this._repository.save(oldNote);
    }
    async searchNote(userId, query) {
        const where = query
            ? { userId, noteTitle: (0, typeorm_1.ILike)(`%${query}%`) }
            : { userId };
        return await this._repository.find({ where });
    }
    mapEntityToModel(entity) {
        return note_model_1.Note.create(entity.noteTitle, entity.noteDescription, entity.userId);
    }
}
exports.NoteRepository = NoteRepository;
