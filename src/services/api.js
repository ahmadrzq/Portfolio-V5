import axios from "axios";

export const getUser = async () => {
    const response = await axios.get('https://portfolio-be-nine.vercel.app/api/v1/user');
    return response.data.data[0];
}