import axios from "axios"

export const updateUser = async (data) => {
    try{
        console.log(data);
        const response = await axios.put(`https://playo-task.onrender.com/${data.id}`, data.userData);
        console.log(response.data);
    }catch(err){
        console.error(err);
    }
}