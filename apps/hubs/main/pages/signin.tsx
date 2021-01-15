import React from 'react';

const signIn = async ({ email, password }) => {
  fetch('/user/auth', {});
};

export function SignIn() {
  return <h1>Sign In</h1>;
}

export default SignIn;
