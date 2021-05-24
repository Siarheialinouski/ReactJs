import coursesTypes from "./actionTypes";

const coursesInitialState = { courses:[], searchCourses:[] };

const coursesReducer = (state = coursesInitialState, { type, payload }) => {
    switch (type) {
        case coursesTypes.ADD_COURSE:
            return {
                ...state, 
                courses: [...state.courses, payload]
            };
        case coursesTypes.DELETE_COURSE:
            return {
                ...state, 
                courses: [...state.courses.filter((course) => course.id !== payload)]
            };
        case coursesTypes.SET_COURSES_SUCCESS:
            return {
                ...state, 
                courses: payload
            };
        case coursesTypes.UPDATE_COURSE:
            return {
                ...state, 
                courses:  [
                    ...state.courses.map((course) => {
                        if (course.id === payload.id) {
                            return { ...course, ...payload };
                        }
                        return course;
                    }),
                ]
            };
        case coursesTypes.GET_COURSES_SEARCH:
            if(payload){
            return {
                ...state, 
                courses: [...state.searchCourses, payload]
            };
        }
        return {
            ...state, 
            courses: []
        };
        default:
            return state;
    }
};

export default coursesReducer;
