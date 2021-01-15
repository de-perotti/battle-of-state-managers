import { AppProps } from 'next/app';
import React, { FC } from 'react';
import {
  Provider as AuthProvider,
  Consumer as AuthConsumer,
} from '../features/auth/AuthContext';

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <AuthConsumer>
        {({ state, logout, deleteAccount }) => {
          if (state === 'loading') {
            return (
              <p>
                Still trying to figure out whether you are authenticated or not
              </p>
            );
          }

          if (state === 'error') {
            return (
              <p>
                Welp, something went so terribly wrong that we couldn't verify
                your authentication
              </p>
            );
          }

          if (state === 'idle') {
            return (
              <>
                <form onSubmit={deleteAccount}>
                  <button type="submit">Apagar Conta</button>
                </form>

                <form onSubmit={logout}>
                  <button type="submit">Deslogar</button>
                </form>

                <Component {...pageProps} />
              </>
            );
          }

          throw new Error('ermerged some awful happened');
        }}
      </AuthConsumer>
    </AuthProvider>
  );
};

export default CustomApp;
