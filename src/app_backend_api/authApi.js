const axios = require("axios");

export const login = (data) => {
    return axios.post("http://localhost:3000/login", data);
  };

export const registration = (data) => {
  return axios.post("http://localhost:3000/register", data);
};

export const loginMe = () => {
  const token = localStorage.getItem("Bearer");

  return axios.get("http://localhost:3000/users/me", {
    headers: { Authorization: `Bearer ${token}` },
  });
};