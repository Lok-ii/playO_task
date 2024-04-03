import axios from "axios";

export const deleteUser = async (id) => {
    try {
        const response = await axios.delete(`https://playo-task.onrender.com/${id}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}