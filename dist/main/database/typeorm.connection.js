"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBaseConnection = void 0;
const typeorm_config_1 = __importDefault(require("../config/typeorm.config"));
class DataBaseConnection {
    static _connection;
    static async connect() {
        {
            if (!this._connection?.isInitialized) {
                this._connection = await typeorm_config_1.default.initialize();
            }
            console.log("Database is now connected");
        }
    }
    static get connection() {
        if (!this._connection) {
            throw new Error("Database is now connected");
        }
        return this._connection;
    }
}
exports.DataBaseConnection = DataBaseConnection;
