import axios from "axios";

export default class CandidateService{
    getCandidates(){
        return axios.get("http://localhost:8080/api/candidate/getall");
    }

    addCandidates(values){
        return axios.post("http://localhost:8080/api/candidate/add",values)
    }

    getById(id){
        return axios.get("http://localhost:8080/api/candidate/getbyid?id="+id)
    }
}
