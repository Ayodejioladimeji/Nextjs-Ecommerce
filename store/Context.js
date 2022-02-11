import { createContext, useReducer } from 'react';
import reducers from './Reducers';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const initialState = { notify: {}, auth: {} };

  const [state, dispatch] = useReducer(reducers, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};
