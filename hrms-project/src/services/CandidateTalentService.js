import axios from "axios";

export default class candidateTalentService{
    getAll(){
        return axios.get("http://localhost:8080/api/candidatetalents/getall")
    }
    findByCandidateId(id){
        return axios.get("http://localhost:8080/api/candidatetalents/findByCandidateCvId?id="+id)
    }
}