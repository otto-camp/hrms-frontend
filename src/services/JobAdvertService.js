import axios from 'axios'

export default class JobAdvertService {
    getJobAdverts()
    {
        return axios.get("http://localhost:8080/api/job-adverts/getAll");
    }
    add(values){
        return axios.post("http://localhost:8080/api/job-adverts/add",values);
    }
    confirmJobAdvert(id,isVerified){
        return axios.put(`http://localhost:8080/api/job-adverts/confirmatinJobAdvert?id=${id}&isVerified=${isVerified}`)
    }
}