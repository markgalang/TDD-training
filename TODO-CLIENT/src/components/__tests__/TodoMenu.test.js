import React from "react";
import { mount } from "enzyme";
import TodoMenu from "components/TodoMenu";
import Todo from "components/Todo";
import Provider from "redux/provider";
import { CornerDownLeft } from "react-feather";

let wrappedComponent;
beforeEach(() => {
  wrappedComponent = mount(
    <Provider>
      <TodoMenu />
    </Provider>
  );
});

afterEach(() => {
  wrappedComponent.unmount();
});

describe("Renders Needed Components", () => {
  it("renders component heading", () => {
    expect(wrappedComponent.find(".todo-menu__heading").length).toEqual(1);
  });

  it("shows 'You have no task todo.' when no todo is available", () => {
    const todoListContainer = wrappedComponent.find(".todo-menu__items");
    expect(todoListContainer.text()).toEqual("You have no task todo.");
  });

  it("shows the input tag", () => {
    expect(
      wrappedComponent.find(".todo-menu__todo-form>.todo-menu__todo-input")
        .length
    ).toEqual(1);
  });

  it("shows submit button", () => {
    expect(
      wrappedComponent.find(".todo-menu__todo-form>.todo-menu__submit-button")
        .length
    ).toBe(1);
  });

  it("shows the correct submit icon", () => {
    const formButton = wrappedComponent.find(
      ".todo-menu__todo-form>.todo-menu__submit-button"
    );
    expect(formButton.children().find(CornerDownLeft).length).toBe(1);
  });
});

// describe("New Todo form behavior", () => {
//   let todoForm;
//   let todoFormInput;
//   let todoFormSubmitButton;

//   beforeEach(() => {
//     todoForm = wrappedComponent.find(".todo-menu__todo-form");
//     todoFormInput = wrappedComponent.find(
//       ".todo-menu__todo-form > .todo-menu__todo-input"
//     );
//     todoFormSubmitButton = wrappedComponent.find(
//       ".todo-menu__todo-form > todo-menu__submit-button"
//     );
//   });

//   it("handle input changes", () => {
//     todoFormInput.simulate("change", {
//       target: { value: "New Todo 123" },
//     });

//     // wrappedComponent.setProps({});

//     expect(todoFormInput.prop("value")).toBe("New Todo 123");
//   });
// });
