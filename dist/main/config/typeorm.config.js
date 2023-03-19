"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const app_env_1 = require("../../app/envs/app.env");
const notes_entity_1 = require("../../app/shared/entities/notes.entity");
const users_entity_1 = require("../../app/shared/entities/users.entity");
exports.default = new typeorm_1.DataSource({
    type: "postgres",
    url: app_env_1.appEnv.dbUrl,
    entities: [users_entity_1.UserEntity, notes_entity_1.NoteEntity],
    migrations: ["src/app/shared/migrations/**/*ts"],
    synchronize: false,
    ssl: {
        rejectUnauthorized: false,
    },
});
