import coursesTypes from "./actionTypes";


export const addCourse = (course) => ({
    type: coursesTypes.ADD_COURSE,
    payload: course,
});

export const deleteCourse = (id) => ({
    type: coursesTypes.DELETE_COURSE,
    payload: id,
});

export const setCoursesSuccess = (courses) => ({
    type: coursesTypes.SET_COURSES_SUCCESS,
    payload: courses,
});

export const getCourseSearch = (courses) => ({
    type: coursesTypes.GET_COURSES_SEARCH,
    payload: courses,
});

export const updateCourse = (course) => ({
    type: coursesTypes.UPDATE_COURSE,
    payload: course,
});
