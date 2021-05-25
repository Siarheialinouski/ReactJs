import types from "../actionTypes";
import reducer from "../reducer";

describe("Courses reducer", () => {
    test("should return the initial state", () => {
        expect(reducer(undefined, {})).toEqual({"courses": [], "searchCourses": []});
    });

    test("reducer should handle ADD_COURSE", () => {
        expect(
            reducer({"courses": [], "searchCourses": []}, {
                type: types.ADD_COURSE,
                payload: { newCourse: "course" }
            })
        ).toEqual({"courses": [{"newCourse": "course"}], "searchCourses": []});
    });

    test("reducer should handle SET_COURSES_SUCCESS", () => {
        expect(
            reducer([], {
                type: types.SET_COURSES_SUCCESS,
                payload: [{ newCourse: "course" }],
            })
        ).toEqual({ "courses": [{ "newCourse": "course" }] });
    });
});
