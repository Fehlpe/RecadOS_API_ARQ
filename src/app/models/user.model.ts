import { v4 } from "uuid";

export class User {
  constructor(
    private _id: string,
    private _username: string,
    private _password: string,
    private _email: string
  ) {
    this._id = v4();
  }

  public get id() {
    return this._id;
  }
  public get password() {
    return this._password;
  }

  public get username() {
    return this._username;
  }
  public get email() {
    return this._email;
  }

  public static create(
    id: string,
    username: string,
    password: string,
    email: string
  ) {
    const user = new User(id, username, password, email);

    return user;
  }

  public toJson() {
    return {
      id: this._id,
      username: this._username,
      email: this.email,
    };
  }
}
