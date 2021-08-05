import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import { validateRequest } from "..";

export const signUpValidator = (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    nickname: Joi.string().required(),
    email: Joi.string().email().required(),
    birthday: Joi.date().timestamp().required(),
    password: Joi.string().required()
  })

  validateRequest(req, res, next, schema)
}
