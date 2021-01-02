import { createContext } from 'react';

interface initialState {
  state?: any;
  dispatch?: any;
}

export const AuthContext = createContext<initialState>({});
