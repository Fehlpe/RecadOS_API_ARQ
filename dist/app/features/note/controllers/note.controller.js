"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteController = void 0;
const http_helper_1 = require("../../../shared/util/http.helper");
const createNote_usecase_1 = require("../usecases/createNote.usecase");
const note_repository_1 = require("../repositories/note.repository");
const getUserNotes_usecase_1 = require("../usecases/getUserNotes.usecase");
const updateNote_usecase_1 = require("../usecases/updateNote.usecase");
const deleteNote_usecase_1 = require("../usecases/deleteNote.usecase");
const archiveNote_usecase_1 = require("../usecases/archiveNote.usecase");
const unarchiveNote_usecase_1 = require("../usecases/unarchiveNote.usecase");
const searchNote_usecase_1 = require("../usecases/searchNote.usecase");
class NoteController {
    async create(req, res) {
        try {
            const usecase = new createNote_usecase_1.CreateNoteUseCase(new note_repository_1.NoteRepository());
            const result = await usecase.execute(req.body);
            return http_helper_1.HttpHelper.sucess(res, result, "Note created");
        }
        catch (error) {
            return http_helper_1.HttpHelper.serverError(res, error.toString());
        }
    }
    async getUserNotes(req, res) {
        try {
            const usecase = new getUserNotes_usecase_1.GetUserNotesUseCase(new note_repository_1.NoteRepository());
            const result = await usecase.execute(req.query);
            return http_helper_1.HttpHelper.sucess(res, result, "Notes returned");
        }
        catch (error) {
            return http_helper_1.HttpHelper.serverError(res, error.toString());
        }
    }
    async updateNote(req, res) {
        try {
            const usecase = new updateNote_usecase_1.UpdateNoteUseCase(new note_repository_1.NoteRepository());
            const result = await usecase.execute(req.body, req.params);
            return http_helper_1.HttpHelper.sucess(res, result, "Note updated");
        }
        catch (error) {
            return http_helper_1.HttpHelper.serverError(res, error.toString());
        }
    }
    async deleteNote(req, res) {
        try {
            const usecase = new deleteNote_usecase_1.DeleteNoteUseCase(new note_repository_1.NoteRepository());
            const result = await usecase.execute(req.params);
            return http_helper_1.HttpHelper.sucess(res, result, "Note deleted");
        }
        catch (error) {
            return http_helper_1.HttpHelper.serverError(res, error.toString());
        }
    }
    async archiveNote(req, res) {
        try {
            const archiveUsecase = new archiveNote_usecase_1.ArchiveNoteUseCase(new note_repository_1.NoteRepository());
            await archiveUsecase.execute(req.params);
            const usecase = new getUserNotes_usecase_1.GetUserNotesUseCase(new note_repository_1.NoteRepository());
            const result = await usecase.execute(req.params);
            return http_helper_1.HttpHelper.sucess(res, result, "Note archived");
        }
        catch (error) {
            return http_helper_1.HttpHelper.serverError(res, error.toString());
        }
    }
    async unarchiveNote(req, res) {
        try {
            const archiveUsecase = new unarchiveNote_usecase_1.UnarchiveNoteUseCase(new note_repository_1.NoteRepository());
            await archiveUsecase.execute(req.params);
            const usecase = new getUserNotes_usecase_1.GetUserNotesUseCase(new note_repository_1.NoteRepository());
            const result = await usecase.execute(req.params);
            return http_helper_1.HttpHelper.sucess(res, result, "Note unarchived");
        }
        catch (error) {
            return http_helper_1.HttpHelper.serverError(res, error.toString());
        }
    }
    async searchNote(req, res) {
        try {
            const usecase = new searchNote_usecase_1.SearchNoteUseCase(new note_repository_1.NoteRepository());
            const result = await usecase.execute(req.params, req.query);
            if (result.length === 0) {
                const getNoteUsecase = new getUserNotes_usecase_1.GetUserNotesUseCase(new note_repository_1.NoteRepository());
                const getNotesResult = await getNoteUsecase.execute(req.params);
                return http_helper_1.HttpHelper.sucess(res, getNotesResult, "Note searched", 201);
            }
            else {
                return http_helper_1.HttpHelper.sucess(res, result, "Note searched", 200);
            }
        }
        catch (error) {
            return http_helper_1.HttpHelper.serverError(res, error.toString());
        }
    }
}
exports.NoteController = NoteController;
