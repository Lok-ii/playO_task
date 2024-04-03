import axios from "axios"

export const getUserData = async () => {
    try {
        const response = await axios.get("https://playo-task.onrender.com/");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        
    }
}