import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeeds", async () => {
    window.fetch = jest.fn(); // creates a mock function
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    }); // mockResolvedValueOnce allows us to set a value which should be resolved by fetch() when it is called (here it is json because response.json() is called on fetch result)
    render(<Async />);

    const listItemElements = await screen.findAllByRole("listitem"); // findAllByRole returns promise, getAllByRole executes immediately
    // react-testing-library continuously re-evaluates the screen until it finds the elements
    // findAllByRole(item, { exact: true/false }, { timeout: time to keep searching the elements on screen, default is 1 second })
    expect(listItemElements).not.toHaveLength(0);
  });
});
