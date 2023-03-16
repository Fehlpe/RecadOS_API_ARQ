import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { checkDuplicateUserValidator } from "../validators/checkDuplicateUser.validator";
import { createUserValidator } from "../validators/createUser.validator";

const userRoutes = Router();

userRoutes.post(
  "/",
  [createUserValidator, checkDuplicateUserValidator],
  new UserController().create
);

export { userRoutes };
