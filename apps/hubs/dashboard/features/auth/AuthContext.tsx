import React, {
  createContext,
  FC,
  ProviderProps,
  useEffect,
  useReducer,
} from 'react';
import noop from 'lodash/noop';
import { PageLogin, urls } from '../../urls';

type AuthContext = {
  authenticated: boolean;
  state: 'loading' | 'idle' | 'error';
  reevaluate: () => void;
  logout: () => void;
  deleteAccount: () => void;
};

const initialContext: AuthContext = {
  authenticated: false,
  state: 'loading',
  reevaluate: noop,
  logout: noop,
  deleteAccount: noop,
};

function reducer(
  state,
  action: 'loading' | 'success' | 'error' | 'deleted'
): AuthContext {
  switch (action) {
    case 'loading':
      return { ...state, state: 'loading' };

    case 'success':
      return { ...state, state: 'idle', authenticated: true };

    case 'error':
      return { ...state, state: 'error', authenticated: false };

    case 'deleted':
      return { ...state, state: 'deleted', authenticated: false };

    default:
      return state;
  }
}

const authApi = {
  isAuthenticated: () =>
    fetch('/api/user/auth/ping').then((res) => res.status === 200),
  logout: () =>
    fetch('/api/user/auth/logout', { method: 'POST' }).then(
      (res) => res.status === 204
    ),
  deleteAccount: () =>
    fetch('/api/user/account', { method: 'DELETE' }).then(
      (res) => res.status === 204
    ),
};

export const context = createContext<AuthContext>(initialContext);
export const Consumer = context.Consumer;
export const Provider: FC<Partial<ProviderProps<AuthContext>>> = ({
  children,
}) => {
  const [{ authenticated, state }, dispatch] = useReducer(
    reducer,
    initialContext
  );

  const deleteAccount = () => {
    dispatch('loading');
    void authApi.deleteAccount().then((haveDeleted) => {
      if (!haveDeleted) {
        dispatch('error');
      }

      dispatch('deleted');
      window.location.assign('http://localhost:4200' + urls.get(PageLogin));
    });
  };

  const logout = () => {
    dispatch('loading');
    void authApi.logout().then((haveLoggedOut) => {
      if (!haveLoggedOut) {
        return;
      }

      window.location.assign('http://localhost:4200' + urls.get(PageLogin));
    });
  };

  const reevaluate = () => {
    dispatch('loading');
    void authApi.isAuthenticated().then((isAuthenticated) => {
      if (isAuthenticated) {
        return dispatch('success');
      }

      dispatch('error');
      void logout();
    });
  };

  useEffect(reevaluate, []);

  return (
    <context.Provider
      value={{ authenticated, state, reevaluate, logout, deleteAccount }}
    >
      {children}
    </context.Provider>
  );
};
