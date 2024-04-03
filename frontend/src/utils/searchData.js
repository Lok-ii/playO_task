import axios from "axios"

export const searchData = async (search) => {
    try {
        const response = await axios.get(`http://localhost:10000/${search}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}