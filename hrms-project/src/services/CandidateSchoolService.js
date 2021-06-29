  
import axios from "axios";

export default class candidateSchoolService{
    getAll(){
        return axios.get("http://localhost:8080/api/candidateschools/getall")
    }
    findByCandidateId(id){
        return axios.get("http://localhost:8080/api/candidateschools/findbycandidatecvid?id="+id)
    }
    getSchoolWithOrdered(id){
        return axios.get("http://localhost:8080/api/candidateschools/getcandidateschoolswithordered?id="+id)
    }
}
