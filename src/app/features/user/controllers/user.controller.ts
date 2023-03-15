import { HttpHelper } from "../../../shared/util/http.helper";
import { Request, Response } from "express";
import { UserRepository } from "../repositories/user.repository";
import { CreateUserUseCase } from "../usecases/createUser.usecase";

export class UserController {
  public async create(req: Request, res: Response) {
    try {
      const usecase = new CreateUserUseCase(new UserRepository());
      const result = await usecase.execute(req.body);
      return HttpHelper.sucess(res, result, "User created");
    } catch (error: any) {
      return HttpHelper.serverError(res, error.toString());
    }
  }
}
