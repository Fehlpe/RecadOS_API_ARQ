"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
class Note {
    _title;
    _description;
    _userId;
    constructor(_title, _description, _userId) {
        this._title = _title;
        this._description = _description;
        this._userId = _userId;
    }
    get description() {
        return this._description;
    }
    get title() {
        return this._title;
    }
    get userId() {
        return this._userId;
    }
    static create(title, description, userId) {
        const note = new Note(title, description, userId);
        return note;
    }
    toJson() {
        return {
            title: this._title,
            description: this.description,
            userId: this.userId,
        };
    }
}
exports.Note = Note;
