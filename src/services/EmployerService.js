import axios from 'axios'

export default class EmployerService {
    getEmployers()
    {
        return axios.get("http://localhost:8080/api/employer/getAll")
    }
    addEmployers(values){
        return axios.post("http://localhost:8080/register-employer",values)
    }
}