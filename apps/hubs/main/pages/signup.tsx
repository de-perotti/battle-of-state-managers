import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const formSchema = yup.object().shape({
  name: yup.string().ensure(),
  password: yup.string().min(8).max(256).required(),
  passwordConfirmation: yup
    .string()
    .min(8)
    .max(256)
    .required()
    .test(
      'something',
      'Passwords must match',
      (passwordConfirmation, { parent }) =>
        parent.password === passwordConfirmation
    ),
  email: yup.string().email().required(),
});

class Dashboard {}

const urls = new Map<unknown, string>([[Dashboard, '/']]);

type SignUpInputs = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

const signUp = async ({
  email,
  password,
  name,
}: {
  email: string;
  password: string;
  name: string;
}) =>
  fetch('/something/user/account', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  }).then((res) => {
    if (res.status === 204) {
      return;
    }

    throw new Error('could not create account');
  });

export const SignUp: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { register, handleSubmit, errors } = useForm<SignUpInputs>({
    resolver: yupResolver(formSchema),
  });
  const router = useRouter();
  const onSubmit = (data: SignUpInputs) => {
    setLoading(true);
    void signUp(data)
      .then(() => {
        void router.push(urls.get(Dashboard));
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    void router.prefetch(urls.get(Dashboard));
  }, [router]);

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            <span>Name</span>
            <input type="text" name="name" ref={register} />
          </label>
        </div>

        <div>
          <label>
            <span>Email</span>
            <input type="email" name="email" ref={register} />
          </label>
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label>
            <span>Password</span>
            <input type="password" name="password" ref={register} />
          </label>
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <div>
          <label>
            <span>Confirm Password</span>
            <input type="password" name="passwordConfirmation" ref={register} />
          </label>
          {errors.passwordConfirmation && (
            <p>{errors.passwordConfirmation.message}</p>
          )}
        </div>

        <button type="submit" disabled={loading}>
          Sign In
        </button>
      </form>
    </>
  );
};

export default SignUp;
