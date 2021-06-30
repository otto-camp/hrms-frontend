import axios from 'axios'

export default class JodAdvertService {
    getJobAdverts()
    {
        return axios.get("http://localhost:8080/api/job-adverts/getAll")
    }
}