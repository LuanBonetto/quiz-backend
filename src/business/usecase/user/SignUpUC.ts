import User from "../../entities/User";
import { BcryptGateway } from "../../gateways/BcryptGateway";
import { JWTAutenticationGateway } from "../../gateways/JWTAutenticationGateway";
import { UserGateway } from "../../gateways/UserGateway";
import { UUIDGateway } from "../../gateways/UUIDGateway";

export class SignUpUC {
  constructor(
    private db: UserGateway,
    private jwt: JWTAutenticationGateway,
    private bcrypt: BcryptGateway,
    private uuid: UUIDGateway
  ){}

  public async execute(input: SignUpInput): Promise<SignUpOutput>{
    try {
      const encryptedPassword = await this.bcrypt.generateHash(input.password)
      const id = this.uuid.generateUUID();
      const newUser = new User(
        id,
        input.firstname,
        input.lastname,
        input.nickname,
        input.email,
        encryptedPassword,
        input.birthday
      )

      await this.db.signUp(newUser);

      const userInfo = {
        userId: newUser.getId(),
        nickname: newUser.getNickname(),
        email: newUser.getEmail()
      }

      const token = this.jwt.generateToken(userInfo, process.env.ACCESS_TOKEN_EXPIRES as string)

      return ({
        message: "User successfully registered!",
        token
      })
    } catch(err){
      throw {
        code: err.statusCode || 400,
        message: err.message || "Some error occurred during the request"
      }
    }
  }
}

interface SignUpInput {
  firstname: string,
  lastname: string,
  nickname: string,
  email: string,
  password: string,
  birthday: number,
  picture: string,
}

interface SignUpOutput {
  message: string,
  token: string
}
