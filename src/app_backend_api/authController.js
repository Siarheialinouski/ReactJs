const axios = require("axios");

export const login = (data) => {
    return axios.post("http://localhost:3000/login", data);
  };

export const registration = (data) => {
  return axios.post("http://localhost:3000/register", data);
};
