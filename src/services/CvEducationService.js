import axios from "axios";

export default class CvEducationService{
    add(values){
        return axios.post('http://localhost:8080/api/cvEdu/add',values)
    }
    getAll(){
        return axios.get('http://localhost:8080/api/cvEdu/getAll')
    }
}