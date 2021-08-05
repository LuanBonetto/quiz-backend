import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";

export const validateRequest = async (req: Request, res: Response, next: NextFunction, schema: Schema) => {
  try {
    const options = {
      abortEarly: true, // include all errors
      allowUnknown: true, // ignore unknown props
      stripUnknown: true // remove unknown props
    };

    const value = await schema.validateAsync(req.method === 'GET' ? req.query : req.body, options);

    if (req.method === 'GET') {
      req.query = {...req.query, ...value};
    } else {
      req.body = value;
    }

    return next();
  } catch (err){
    return res.status(422).send({
      error: err.details
    });
  }
}
