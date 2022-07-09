import axios from "axios";
const BASE_URL = 'http://localhost:8081/user';

class UserService {

    addUserRegister(data) {
        return axios.post(`${BASE_URL}/register`, data)
      }
      addUserLogin(data) {
        return axios.post(`${BASE_URL}/login`, data)
      }
      getAllUser() {
        return axios.get(`${BASE_URL}/getAll`);
      }
}
export default new UserService();