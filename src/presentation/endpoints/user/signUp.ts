import { Request, Response } from "express";
import { BcryptPassword } from "../../../business/helpers/Bcrypt";
import { JWTAutentication } from "../../../business/helpers/JWTAutentication";
import { UUIDGenerator } from "../../../business/helpers/UUID";
import { SignUpUC } from "../../../business/usecase/user/SignUpUC";
import { UserDB } from "../../../data/UserDB";

export const signUpEndpoint = async (req: Request, res: Response) => {
  try {
    const signUpUC = new SignUpUC(
      new UserDB(),
      new JWTAutentication(),
      new BcryptPassword(),
      new UUIDGenerator()
    )

    const result = await signUpUC.execute({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      nickname: req.body.nickname,
      email: req.body.email,
      password: req.body.password,
      birthday: req.body.birthday,
      picture: req.body.picture
    })

    res.status(200).send(result)

  } catch (err) {
    res.status(err.errorCode || 400).send({
      message: err.message
    })
  }
}
