import userSchema from "../schemas/userSchema.js";

export default function userSchemaValidationMiddleware(req, res, next) {
  const validation = userSchema.validate(req.body, {abortEarly: false});
  if (validation.error) {
    return res.sendStatus(422);
  }

  next();
}