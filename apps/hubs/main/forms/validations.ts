import * as yup from 'yup';

export const name = yup.string().ensure();
export const password = yup.string().min(8).max(256).required();
export const passwordConfirmation = yup
  .string()
  .min(8)
  .max(256)
  .required()
  .test(
    'something',
    'Passwords must match',
    (passwordConfirmation, { parent }) =>
      parent.password === passwordConfirmation
  );
export const email = yup.string().email().required();
