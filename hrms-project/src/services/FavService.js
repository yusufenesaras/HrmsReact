import axios from "axios";

export default class FavService{

    getAll(){
        return axios.get("http://localhost:8080/api/favourite/getall")
    }
    add(object) {
        return axios.post("http://localhost:8080/api/favourite/add",object);
    }
      findByCandidateId(candidateId){
        return axios.get(`http://localhost:8080/api/favourite/findByCandidateId?id=${candidateId}`)
    }
    delete(candidateId,jobId){
        return axios.delete(`http://localhost:8080/api/favourite/delete?id=${candidateId}&jobId=${jobId}`)
    }
}