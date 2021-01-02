import { authTypes } from '../../types/authTypes';
import { initialAuthState } from '../../App';

export const authReducer = (
  state: initialAuthState = { token: null, logged: false },
  action: any
) => {
  switch (action.type) {
    case authTypes.login:
      return { token: action.payload, logged: true };

    case authTypes.logout:
      return { token: null, logged: false };
    default:
      return state;
  }
};
