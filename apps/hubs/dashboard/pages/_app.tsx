import { AppProps } from 'next/app';
import React, { FC } from 'react';
import Link from 'next/link';
import {
  Provider as AuthProvider,
  Consumer as AuthConsumer,
} from '../features/auth/AuthContext';
import {
  PageDashboard,
  PageFormAddress,
  PageFormPersonal,
  urls,
} from '../core/urls';

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
                  <button type="submit">Delete Account</button>
                </form>

                <form onSubmit={logout}>
                  <button type="submit">Logout</button>
                </form>

                <Link href={urls.get(PageDashboard)}>Home</Link>
                <Link href={urls.get(PageFormAddress)}>
                  Address Information
                </Link>
                <Link href={urls.get(PageFormPersonal)}>
                  Personal Information
                </Link>

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
