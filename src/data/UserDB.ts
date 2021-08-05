import User from "../business/entities/User";
import { BadRequestError } from "../business/errors/BadRequestError";
import { UserGateway } from "../business/gateways/UserGateway";
import { BaseDatabase } from "./BaseDB";

export class UserDB extends BaseDatabase implements UserGateway {
  private userTableName = "users";

  public async signUp(user: User): Promise<void> {
    try {
      await this.connection.insert({
        id: user.getId(),
        firstname: user.getFirstname(),
        lastname: user.getLastname(),
        nickname: user.getNickname(),
        email: user.getEmail(),
        password: user.getPassword(),
        birthday: user.getBirthday(),
        picture: user.getPicture(),
      }).into(this.userTableName)
    } catch(err){
      throw new BadRequestError(err)
    }
  }
}
