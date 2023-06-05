import axios from "axios";


const axios1 = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',

})

 export async function getPost(page=1){
const response = await axios1.get(`posts?_page=${page}`)
return response.data
}