import axios from "axios";

export default class jobTitleService{
    getJobTitle(){
        return axios.get("http://localhost:8080/api/jobtitles/getall")
    }

    findById(id){
        return axios.get("http://localhost:8080/api/jobtitles/findbyid/"+id)
    }

    findByTitle(title){
        return axios.get("http://localhost:8080/api/jobtitles/findbytitle/"+title)
    }
}