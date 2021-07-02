import axios from "axios";

export default class EmployerService{
    getEmployers(){
        return axios.get("http://localhost:8080/api/employers/getall");
    }
    addEmployers(values){
        return axios.post("http://localhost:8080/api/employers/add",values)
    }
    update(values){
        return axios.post("http://localhost:8080/api/employers/update",values)
    }
    getByIdForAdmins(id){
        return axios.get("http://localhost:8080/api/employers/getByIdForAdmins?id="+id)
    }
    changeVerifiedStatus(id) {
        return axios.post("http://localhost:8080/api/employers/changeverifiedstatus?id="+id);
    }
}