"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const typeorm_connection_1 = require("../../../../main/database/typeorm.connection");
const user_model_1 = require("../../../models/user.model");
const users_entity_1 = require("../../../shared/entities/users.entity");
class UserRepository {
    _repository = typeorm_connection_1.DataBaseConnection.connection.getRepository(users_entity_1.UserEntity);
    async createUser(user) {
        const userEntity = this._repository.create({
            userPassword: user.password,
            userEmail: user.email,
            userName: user.username,
        });
        const result = await this._repository.save(userEntity);
        result;
    }
    async loginUser(userEmail, userPassword) {
        const userEntity = await this._repository.findOneBy({
            userEmail,
            userPassword,
        });
        return userEntity;
    }
    async getByUserName(username) {
        const result = await this._repository.findOneBy({
            userName: username,
        });
        if (!result) {
            return null;
        }
        return this.mapEntityToModel(result);
    }
    async getByEmail(email) {
        const result = await this._repository.findOneBy({
            userEmail: email,
        });
        if (!result) {
            return null;
        }
        return this.mapEntityToModel(result);
    }
    async getAll() {
        const result = await this._repository.find();
        if (!result) {
            return null;
        }
        return result.map((user) => this.mapEntityToModel(user));
    }
    mapEntityToModel(entity) {
        return user_model_1.User.create(entity.userPassword, entity.userName, entity.userEmail);
    }
}
exports.UserRepository = UserRepository;
