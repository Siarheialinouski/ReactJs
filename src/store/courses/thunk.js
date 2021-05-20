import api from "../../app_backend_api/axios";
import {
    updateCourse as updateThisCourse,
    deleteCourse as deleteThisCourse,
    setCoursesSuccess,
    addCourse,
} from "./actionCreators";

export const getCourse = (id) => {
    return api.get(`/courses/${id}`);
};

export const getAllCourses = () => (dispatch) => {
    api.get("/courses/all").then((resp) => dispatch(setCoursesSuccess(resp.data.result)));
};

export const createCourse = (course) => (dispatch) => {
    const token = localStorage.getItem("Bearer");
    api.post(`/courses/add`, course, {
        headers: { Authorization: `Bearer ${token}` },
    }).then((resp) => dispatch(addCourse(resp.data.result)));
};

export const updateCourse =
    ({ id, authors, duration, description, title }) =>
        (dispatch) => {
            const token = localStorage.getItem("Bearer");
            api.put(`/courses/${id}`,
                { authors, duration, description, title },
                { headers: { Authorization: `Bearer ${token}` } }
            ).then((resp) => dispatch(updateThisCourse(resp.data.result)));
        };

export const deleteCourse = (id) => (dispatch) => {
    const token = localStorage.getItem("Bearer");
    api.delete(`/courses/${id}`, { headers: { Authorization: `Bearer ${token}` } })
        .then((resp) => {
            dispatch(deleteThisCourse(id));
        });
};
