import axios from "axios"

export const getUserData = async () => {
    try {
        const response = await axios.get("http://localhost:10000/");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        
    }
}