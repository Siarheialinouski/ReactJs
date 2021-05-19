const axios = require("axios");

export const getAllCourses = () => {
  return axios.get("http://localhost:3000/courses/all");
};

export const getCourse = (id) => {
  return axios.get(`http://localhost:3000/courses/${id}`);
};

export const addCourse = (course) => {
  const token = localStorage.getItem("Bearer");
  return axios.post(`http://localhost:3000/courses/add`, course, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const deleteCourse = (id) => {
  const token = localStorage.getItem("Bearer");
  return axios.delete(`http://localhost:3000/courses/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
