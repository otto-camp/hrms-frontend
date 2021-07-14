import axios from 'axios';

export default class UserService {
    getAll() {
        return axios.get("http://localhost:8080/api/users/getAll");
    }

    login(values) {
        return axios.post("http://localhost:8080/api/users/login", values)
    }

    getByEmail(email){
        return axios.get(`http://localhost:8080/api/users/getByEmail?email=${email}`)
    }
}
