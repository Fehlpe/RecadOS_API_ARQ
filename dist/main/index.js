"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_connection_1 = require("./database/typeorm.connection");
const express_server_1 = require("./server/express.server");
typeorm_connection_1.DataBaseConnection.connect().then(express_server_1.runServer);
