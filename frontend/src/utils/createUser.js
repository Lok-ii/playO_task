import axios from "axios";

export const createUser = async (userDetails) => {
    try {
        const response = await axios.post("http://localhost:10000/", userDetails);
        console.log(response.data);
    } catch (error) {
        console.error(error);
        
    }
}