import axios from "axios";

export default class WorkTypeService{
    getWorkPlaces(){
        return axios.get("http://localhost:8080/api/worktype/getall")
    }
}