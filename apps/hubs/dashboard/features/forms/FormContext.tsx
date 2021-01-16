import React, {
  ComponentType,
  createContext,
  FC,
  ProviderProps,
  useCallback,
  useState,
} from 'react';
import noop from 'lodash';

type Form = unknown;

type FormContext = {
  address: Form;
  personal: Form;
  setAddress: (data: unknown) => void;
  setPersonal: (data: unknown) => void;
};

const initialContext: FormContext = {
  address: {},
  personal: {},
  setAddress: noop,
  setPersonal: noop,
};

export const context = createContext<FormContext>(initialContext);
export const Provider: FC<Omit<ProviderProps<FormContext>, 'value'>> = ({
  children,
}) => {
  const [state, setState] = useState(initialContext);

  const setAddress = useCallback((data: unknown) => {
    initialContext.address = data;
    setState((state) => ({ ...state, address: data }));
  }, []);

  const setPersonal = useCallback((data: unknown) => {
    initialContext.personal = data;
    setState((state) => ({ ...state, personal: data }));
  }, []);

  return (
    <context.Provider value={{ ...state, setAddress, setPersonal }}>
      {children}
    </context.Provider>
  );
};

export function withFormContext<T>(Component: ComponentType<T>) {
  return (props: T) => {
    return (
      <Provider>
        <Component {...props} />
      </Provider>
    );
  };
}
