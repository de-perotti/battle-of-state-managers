import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ApiAccountCreation, PageLogin, urls } from '../urls';
import {
  email,
  password,
  name,
  passwordConfirmation,
} from '../forms/validations';

const formSchema = yup.object().shape({
  email,
  password,
  name,
  passwordConfirmation,
});

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
  fetch(urls.get(ApiAccountCreation), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  }).then((res) => {
    if (res.status === 201) {
      return;
    }

    throw new Error('could not create accounts');
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
        void router.push(urls.get(PageLogin));
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    void router.prefetch(urls.get(PageLogin));
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
