import * as jwt from 'jsonwebtoken';
import { JWTAutenticationGateway } from '../gateways/JWTAutenticationGateway';

export class JWTAutentication implements JWTAutenticationGateway {
  public generateToken(input: UserInfoForToken, expiresIn: string):string{
    const token = jwt.sign({
      userId: input.userId,
      nickname: input.nickname,
      email: input.email
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn
    })
    return token
  }
}

export interface UserInfoForToken {
  userId: string;
  nickname: string;
  email: string;
}
