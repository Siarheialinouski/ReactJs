const axios = require("axios");

export const getAuthorById = (id) => {
    return axios.get(`http://localhost:3000/authors/${id}`);
  };

export const getAll = () => {
  return axios.get("http://localhost:3000/authors/all");
};

export const addAuthor = (author) => {
  const token = localStorage.getItem("Bearer");
  return axios.post(`http://localhost:3000/authors/add`, author, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
