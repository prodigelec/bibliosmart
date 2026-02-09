import joi from 'joi';

const schemaLogin = joi.object({
  email: joi.
  string()
  .email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net'] }
  })
  .required()
  .messages({
    'string.email': 'Veuillez entrer une adresse email valide',
  }),

  password: joi.
  string()
  .min(6)
  .max(20)
  .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)
  .required()
  .messages({
    'string.min': 'Le mot de passe doit avoir au moins 6 caractères',
    'string.max': 'Le mot de passe ne peut pas dépasser 20 caractères',
    'string.pattern.base': 'Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial',
  })
});

