import axios from "axios";

export default class JobAdService{
    getActiveJobAds(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getallactive");
    }
    getAll(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getall")
    }
    getEmployerJobAds(id){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getEmployerJobAdvertisement?id="+id)
    }
    add(values){
        return axios.post("http://localhost:8080/api/jobAdvertisements/add",values)
    }
    getOneById(id){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getOneById?id="+id)
    }
    getAllActiveWithSorted(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getallactivesorted")
    }
    getFilter(pageNo,pageSize){
        return axios.post("http://localhost:8080/api/jobAdvertisements/getConfirmedJobAdsWithPageable?pageNo=1&pageSize="+pageNo,pageSize)
    }
    
}