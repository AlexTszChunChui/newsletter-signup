import Joi from "joi";

const Schema = Joi.object({
  email: Joi.string()
  .email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  })
  .required()
});

export default Schema;
