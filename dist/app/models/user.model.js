"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const uuid_1 = require("uuid");
class User {
    _username;
    _password;
    _email;
    _id;
    constructor(_username, _password, _email, _id) {
        this._username = _username;
        this._password = _password;
        this._email = _email;
        this._id = _id;
        this._id = (0, uuid_1.v4)();
    }
    get id() {
        return this._id;
    }
    get password() {
        return this._password;
    }
    get username() {
        return this._username;
    }
    get email() {
        return this._email;
    }
    static create(username, password, email) {
        const user = new User(username, password, email);
        return user;
    }
    toJson() {
        return {
            id: this._id,
            username: this._username,
            email: this.email,
        };
    }
}
exports.User = User;
