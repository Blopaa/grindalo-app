import axios from 'axios';

export const getSpots = async (token: string) => {
  let res;
  try {
    const { data, status } = await axios.get(
      `${process.env.REACT_APP_API_URI}/api/spots`,
      {
        headers: { 'auth-token': token },
      }
    );
    res = { data, status };
  } catch (err) {
    const { status } = err.response;
    const { message } = err.response.data;
    res = { status, message };
  } finally {
    return res;
  }
};

export const getSpotById = async(token: string, id: string) => {
  let res;
  try {
    const { data, status } = await axios.get(
      `${process.env.REACT_APP_API_URI}/api/spot/${id}`,
      {
        headers: { 'auth-token': token },
      }
    );
    res = { data, status };
  } catch (err) {
    const { status } = err.response;
    const { message } = err.response.data;
    res = { status, message };
  } finally {
    return res;
  }
}