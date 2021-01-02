import axios from "axios";

export const signin = async (state: {}) => {
    let res;
  try {
      const {data, status} = await axios.post(`${process.env.REACT_APP_API_URI}/api/auth/signin`, state)
      res = {data, status}
  } catch (err) {
      const {status} = err.response;
      const {message} = err.response.data;
      res = {status, message}
  }finally{
      return res
  }
};

export const signup = async (state: {}) => {
    let res;
  try {
      const {data, status} = await axios.post(`${process.env.REACT_APP_API_URI}/api/auth/signup`, state)
      res = {data, status}
  } catch (err) {
      const {status} = err.response;
      const {message} = err.response.data;
      res = {status, message}
  }finally{
      return res
  }
};