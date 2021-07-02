import axios from "axios";

export default class candidateTalentService{
    getAll(){
        return axios.get("http://localhost:8080/api/candidatetalents/getall")
    }
    findByCandidateId(id){
        return axios.get("http://localhost:8080/api/candidatetalents/findByCandidateCvId?id="+id)
    }
    add(values){
        return axios.post("http://localhost:8080/api/candidatetalents/add",values)
    }
    update(values){
        return axios.post("http://localhost:8080/api/candidatetalents/update",values)
    }
    delete(id){
    return axios.delete("http://localhost:8080/api/candidatetalents/delete?id="+id)
    }
}