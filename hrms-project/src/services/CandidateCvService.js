import axios from "axios";

export default class CandidateService{
    getAll(){
        return axios.get("http://localhost:8080/api/cv/getall")
    }

    findByCandidateId(id){
        return axios.get("http://localhost:8080/api/cv/findbycandidateid?id="+id);
    }
    
    addCandidateCv(values){
        return axios.post("http://localhost:8080/api/cv/add",values)
    }
    addCvPhoto(values){
        return axios.post("http://localhost:8080/api/cv/addcvphoto",values)
    }
    findByCvId(id){
        return axios.get("http://localhost:8080/api/cv/findbycvid?id="+id);
    }
    update(values){
        return axios.post("http://localhost:8080/api/cv/update",values)
    }
}