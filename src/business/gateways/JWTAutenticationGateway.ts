
import { UserInfoForToken } from "../helpers/JWTAutentication";

export interface JWTAutenticationGateway {
  generateToken(input: UserInfoForToken, expiresIn: string): string
}
