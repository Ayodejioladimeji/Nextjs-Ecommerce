import { createContext } from 'react';

export const Context = createContext();

export const contextProvider = ({ children }) => {
  const initialState = { notify: {}, auth: {} };

  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};
