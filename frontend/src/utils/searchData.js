import axios from "axios"

export const searchData = async (search) => {
    try {
        const response = await axios.get(`https://playo-task.onrender.com/${search}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}