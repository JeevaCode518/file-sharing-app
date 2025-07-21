import axios from 'axios';

export const uploadFile = async(data) => {
    try{
        console.log(data);
        const response =  await axios.post("http://localhost:8000/upload", data, {
    });
        console.log(response);
        return response.data;
    }catch(error){
        console.log(error.message);
    }
}
