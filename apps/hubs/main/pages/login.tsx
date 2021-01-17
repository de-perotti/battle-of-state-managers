import React, { useReducer } from 'react';
import { ApiSignIn, PageDashboard, PageSignUp, urls } from '../urls';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { email, password } from '../forms/validations';
import { useRouter } from 'next/router';

const formSchema = yup.object().shape({
  email,
  password,
});

const login = async ({ email, password }) =>
  fetch(urls.get(ApiSignIn), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    if (res.status === 204) {
      return;
    }

    throw new Error('could not sign in');
  });

type LoginInputs = {
  email: string;
  password: string;
};

const initialState: { loading: boolean; error: Error | null } = {
  loading: false,
  error: null,
};

function reducer(state, action): typeof initialState {
  switch (action.type) {
    case 'reset':
      return initialState;

    case 'error':
      return { loading: false, error: action.error };

    default:
      return state;
  }
}

export function Login() {
  const [{ error, loading }, dispatch] = useReducer(reducer, initialState);
  const { register, errors, handleSubmit } = useForm<LoginInputs>({
    resolver: yupResolver(formSchema),
  });

  const router = useRouter();

  const onSubmit = (data: LoginInputs) => {
    dispatch({ type: 'reset' });
    login(data)
      .then(() => {
        void router.push(urls.get(PageDashboard));
      })
      .catch((e) => {
        dispatch({ type: 'error', error: e.message });
      });
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {error && <p>{error}</p>}
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
        </div>
        {errors.password && <p>{errors.password.message}</p>}
        <button type="submit" disabled={loading}>
          Login
        </button>
      </form>
    </>
  );
}

export default Login;
