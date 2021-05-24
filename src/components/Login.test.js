import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {Login} from "./Login";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import "@testing-library/jest-dom/extend-expect";

describe("Login tests", () => {
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
    user: { role: "admin", name: "user",  email: "userEmail", },
    authors: [
      {
        name: "author",
        id: "9b87e8b8-6ba5-40fc-a439-c4e30a373d36",
      },
      {
        name: "author2",
        id: "1c972c52-3198-4098-b6f7-799b45903199",
      },
      {
        name: "author3",
        id: "072fe3fc-e751-4745-9af5-aa9eed0ea9ed",
      },
      {
        name: "author4",
        id: "40b21bd5-cbae-4f33-b154-0252b1ae03a9",
      },
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
