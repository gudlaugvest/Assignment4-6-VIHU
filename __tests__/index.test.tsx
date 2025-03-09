// import for vitest
import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event"; // 🧑‍🏫 Use this to act like a user
import Home from "../pages/index";
import {server} from './setupMSW';


// 🧑‍🏫 Todo add your UI tests here
describe("Todo List", () => {
  afterEach(() => {
    cleanup(); // 🧑‍🏫 Clean up the DOM after each test
  });


  //Write a test that asserts that loading is displayed when the response is not correct
  it("should show loading when response is not correct", async () => {
    server.use(

    );
  });


  // Write a test that asserts that a single item is in the list when the component is loaded
  it("should show todos when page is loaded", async () => {
    
  });

  // Write a test that adds a new item to the list
  it("should add a new todo", async () => {
    render(<Home />);
    const input = await screen.findByPlaceholderText("Add a new todo...");
    userEvent.type(input, "Learn Testing");
    userEvent.type(input, "{enter}");
    const todo = await screen.findByText("Learn Testing");
    expect(todo).toBeDefined();
  });

  // Write a test that removes an item from the list
  it("should remove a todo", async () => {
    render(<Home />);
    const todo = await screen.findByText("Learn Testing");
    const deleteButton = todo.parentElement?.querySelector('button');
    userEvent.click(deleteButton!);
    await waitFor(() => {
      expect(screen.queryByRole('textbox', { name: /Learn Testing/ })).toBeNull();
    });
  });
  

  // 🧑‍🏫 Example test
  it("should show todos when page is loaded", async () => {
    render(<Home />);

    const todo1 = await screen.findByText("Learn Testing"); // 🧑‍🏫 These are defined in __tests__/mocks/handlers.ts
    const todo2 = await screen.findByText("Write Tests");

    expect(todo1).toBeDefined();
    expect(todo2).toBeDefined();
    expect(
      todo2.parentElement?.querySelector('input[type="checkbox"]')
    ).toBeDefined();
  });
});
