import axios from "axios";

export default class JobPositionService{

    getJobTitles(){
        return axios.get("http://localhost:8080/api/jobtitles/getall")
    }
}