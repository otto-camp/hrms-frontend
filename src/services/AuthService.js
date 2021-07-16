import axios from "axios";

export default class AuthService{
    registerCandidate(values){
        return axios.post("http://localhost:8080/register-candidate",values);
    }
}