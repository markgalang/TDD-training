import React from "react";
import { shallow } from "enzyme";
import App from "App";
import TodoMenu from "components/TodoMenu";

let wrappedComponent;

beforeEach(() => {
  wrappedComponent = shallow(<App />);
});

it("renders a div with 'App' classname", () => {
  expect(wrappedComponent.find(".App").length).toEqual(1);
});

it("renders TodoMenu Component", () => {
  //   Returns a array -> wrappedComponent.find(TodoMenu)
  expect(wrappedComponent.find(TodoMenu).length).toEqual(1);
});
