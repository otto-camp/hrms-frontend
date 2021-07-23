import axios from "axios";

export default class CvExperienceService{
    add(values){
        return axios.post('http://localhost:8080/api/cvExp/add',values)
    }
    getAll(){
        return axios.get('http://localhost:8080/api/cvExp/getAll')
    }
}