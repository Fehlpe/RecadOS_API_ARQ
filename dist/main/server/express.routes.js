"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRoutes = void 0;
const note_routes_1 = require("../../app/features/note/routes/note.routes");
const user_routes_1 = require("../../app/features/user/routes/user.routes");
const makeRoutes = (app) => {
    app.use("/user", user_routes_1.userRoutes);
    app.use("/note", note_routes_1.noteRoutes);
};
exports.makeRoutes = makeRoutes;
