import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { CoursesList } from "./CoursesList";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import "@testing-library/jest-dom/extend-expect";
import { createBrowserHistory } from "history";

describe("CoursesList test", () => {
  const history = createBrowserHistory();
  history.push = jest.fn();

  class LocalStorageMock {
    constructor() {
      this.store = {};
    }

    getItem(key) { return this.store[key] || null; }
    setItem(key, value) { this.store[key] = value.toString(); }
  }

  global.localStorage = new LocalStorageMock();

  beforeEach(() => {
    localStorage.setItem("Bearer", "token");
  });

  test("CoursesList should display amount of Card equal length of courses array", () => {
    const initialState = {
      courses: [
        {
          title: "Reac Title",
          description: "React description",
          duration: 125,
          authors: ["9987de6a-b475-484a-b885-622b8fb88bda"],
          creationDate: "28/04/2021",
          id: "f9506898-36e7-4ac3-a299-e3656209d82c",
        },
      ],
      user: { role: "admin" },
      authors: [
        {
          name: "author5",
          id: "5e0b0f18-32c9-4933-b142-50459b47f09e",
        },
        {
          name: "author6",
          id: "9987de6a-b475-484a-b885-622b8fb88bda",
        },
      ],
    };
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <CoursesList />
      </Provider>
    );

    expect(screen.getAllByTestId("courseList").length).toBe(
      initialState.courses.length
    );
  });

  test("CoursesList should display Empty container if courses array length is empty.", () => {
    const initialState = {
      courses: [],
      user: { role: "admin" },
      authors: [],
    };
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <CoursesList />
      </Provider>
    );

    expect(screen.getByTestId("courseList")).toBeEmptyDOMElement();
  });
});
