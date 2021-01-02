import axios from "axios";

export const getLikedPost = async (token: string) => {
    let res;
    try {
        const {data, status} = await axios.get(`${process.env.REACT_APP_API_URI}/api/getliked`, {headers: {"auth-token": token}})
        res = {data, status}
    } catch (err) {
        const {status} = err.response;
        const {message} = err.response.data;
        res = {status, message}
    }finally{
        return res
    }
}