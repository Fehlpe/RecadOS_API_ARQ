import { DataBaseConnection } from "../../../../main/database/typeorm.connection";
import { User } from "../../../models/user.model";
import { UserEntity } from "../../../shared/entities/users.entity";

export class UsuarioRepository {
  private _repository = DataBaseConnection.connection.getRepository(UserEntity);

  public async createUser(user: User) {
    const userEntity = this._repository.create({
      userId: user.id,
      userPassword: user.password,
      userEmail: user.email,
      userName: user.username,
    });
    const result = await this._repository.save(userEntity);

    return this.mapEntityToModel(result);
  }

  public async getByUserName(username: string) {
    const result = await this._repository.findOneBy({
      userName: username,
    });

    if (!result) {
      return null;
    }

    return this.mapEntityToModel(result);
  }
  public async getAll() {
    const result = await this._repository.find();

    if (!result) {
      return null;
    }

    return result.map((user) => this.mapEntityToModel(user));
  }

  private mapEntityToModel(entity: UserEntity) {
    return User.create(
      entity.userId,
      entity.userPassword,
      entity.userName,
      entity.userEmail
    );
  }
}
