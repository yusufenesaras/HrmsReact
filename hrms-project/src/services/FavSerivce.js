import axios from "axios";

export default class FavService{
findByCandidateIdandJobId(cId,jId){
    return axios.post(`http://localhost:8080/api/favourite/findByCandidateId?id=${cId}&jobId=${jId}`)
    }   
}