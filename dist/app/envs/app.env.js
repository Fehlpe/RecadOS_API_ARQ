"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appEnv = void 0;
require("dotenv/config");
exports.appEnv = {
    dbUrl: process.env.DB_URL,
    port: process.env.PORT,
    secret: process.env.SECRET,
};
