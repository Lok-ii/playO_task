import axios from "axios";

export const createUser = async (userDetails) => {
    try {
        const response = await axios.post("https://playo-task.onrender.com/", userDetails);
        return response.data;
    } catch (error) {
        console.error(error);

    }
}