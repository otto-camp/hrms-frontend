import axios from "axios";

export default class JobTimeService{
    getJobTimes(){
        return axios.get("http://localhost:8080/api/jobTime/getAll")
    }
}