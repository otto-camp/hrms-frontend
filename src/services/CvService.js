import axios from "axios";

export default class CvService{
    add(values){
        return axios.post(`http://localhost:8080/api/cv/add`,values)
    }
    getAll(){
        return axios.get("http://localhost:8080/api/cv/getAll")
    }
}