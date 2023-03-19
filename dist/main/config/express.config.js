"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const createServer = () => {
    const api = (0, express_1.default)();
    api.use(express_1.default.json());
    api.use((0, cors_1.default)());
    return api;
};
exports.createServer = createServer;
