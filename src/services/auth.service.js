import axios from "axios";

const API_URL = "http://localhost:3001/";

const register = (username, password, age) => {
  return axios.post(API_URL + "users", {
    username,
    password,
    age,
    
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
        console.log(JSON.stringify(response.data))
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
  console.log('user')
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};