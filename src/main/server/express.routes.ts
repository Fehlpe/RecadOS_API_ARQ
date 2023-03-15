import { Express } from "express";
import { userRoutes } from "../../app/features/user/routes/user.routes";

export const makeRoutes = (app: Express) => {
  app.use("/user", userRoutes);
};
