import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {EditCourse} from "./EditCourse"
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import "@testing-library/jest-dom/extend-expect";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import * as reactRedux from "react-redux";
import { nanoid } from "nanoid";

jest.mock("nanoid");

describe("EditCourse test", () => {
  const history = createBrowserHistory();
  history.push = jest.fn();

  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
  global.nanoid = jest.fn(() => "id");

  jest.mock("react", () => ({
    ...jest.requireActual("react"),
    useState: jest.fn(),
  }));

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
    authors: [],
  };
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const store = mockStore(initialState);

  const FormComponent = () => (
    <Router history={history}>
      <Provider store={store}>
        <EditCourse />
      </Provider>
    </Router>
  );

  test("CreateCourse should add author to course authors list", () => {
    history.push("/courses/add");
    render(FormComponent());

    fireEvent.click(screen.getAllByText("Create author")[0]);
  });

  test("CreateCourse should show authors list", () => {
    history.push("/courses/add");
    render(FormComponent());

    expect(screen.getByTestId("authorList")).toBeInTheDocument();
  });
});
