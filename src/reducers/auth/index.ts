import { authTypes } from '../../types/authTypes';

export const authReducer = (state: {} = {}, action: any) => {
  switch (action.type) {
    case authTypes.login:
      console.log(action.payload)
      console.log("hereinreducer")
      return { token: action.payload };

    case authTypes.logout:
      return { token: null };
    default:
      return state
  }
};
