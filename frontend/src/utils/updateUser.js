import axios from "axios"

export const updateUser = async (data) => {
    try{
        const response = await axios.patch(`http://localhost:10000/${data.id}`, data.userData);
        console.log(response.data);
    }catch(err){
        console.error(err);
    }
}