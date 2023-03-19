"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runServer = void 0;
const express_config_1 = require("../config/express.config");
const express_routes_1 = require("./express.routes");
const app_env_1 = require("../../app/envs/app.env");
const runServer = () => {
    const api = (0, express_config_1.createServer)();
    api.get("/", (_, res) => {
        res.send("<h1>Teste</h1>");
    });
    (0, express_routes_1.makeRoutes)(api);
    api.listen(app_env_1.appEnv.port, () => console.log(`Api is running on port ${app_env_1.appEnv.port}`));
};
exports.runServer = runServer;
