import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "https://reqres.in/api/users?page=2";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post("https://reqres.in/api/users", employee);
    }

    getEmployeeById(employeeId){
        return axios.get("https://reqres.in/api/users/2", employeeId);
        //  + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put("https://reqres.in/api/users/2", employee);
    }

    deleteEmployee(employeeId){
        return axios.delete("https://reqres.in/api/users/2", employeeId);
    }
}

export default new EmployeeService()