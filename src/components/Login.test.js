import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Login } from "./Login";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import "@testing-library/jest-dom/extend-expect";

describe("Login tests", () => {
  const initialState = {
    courses: [],
    user: { role: "admin", name: "user", email: "userEmail", },
    authors: [],
  };
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const store = mockStore(initialState);

  test("Header should display button and name", () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    expect(screen.getByText(initialState.user.email)).toBeInTheDocument();
    expect(screen.getByText('Logout')).toBeInTheDocument();
  });
});
