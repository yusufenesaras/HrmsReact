import axios from "axios";

export default class candidateLanguageService{
    getAll(){
        return axios.get("http://localhost:8080/api/candidatelanguages/getall")
    }
    findByCandidateId(id){
        return axios.get("http://localhost:8080/api/candidatelanguages/findByCandidateCvId?id="+id)
    }
    add(values){
        return axios.post("http://localhost:8080/api/candidatelanguages/add",values)
    }
    update(values){
        return axios.post("http://localhost:8080/api/candidatelanguages/update",values)
    }
    delete(id){
    return axios.delete("http://localhost:8080/api/candidatelanguages/delete?id="+id)
    }
}