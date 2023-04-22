import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
import fetchMock from 'jest-fetch-mock';

// This is a mock response object so that we're not actually making network requests
const mockObject = {
  firstName: "Terry",
  lastName: "Medhurst",
  birthDate: "2000-12-25",
  university: "Capitol University",
  todos: [
    { id: 17, todo: "Create a cookbook with favorite recipes" },
    { id: 18, todo: "Bake a pie with some friends" },
    { id: 54, todo: "Start a daily journal" },
  ],
};

// This resets our `fetch` mocks before each of the following tests we run
describe("Testing App.js", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("renders without error", () => {
    fetchMock.mockResponse(JSON.stringify(mockObject));
    render(<App />);
    const linkElement = screen.getByText(/Users and their todos/i)
    expect(linkElement).toBeInTheDocument();
  });

  it("fetches the user when an ID is submitted", async () => {
    fetchMock.mockResponse(JSON.stringify(mockObject));
    render(<App />);
    const input = screen.getByRole("spinbutton");
    const form = screen.getByRole("form");

    fireEvent.change
      (
        input,
        {
          target: { value: 1 }
        }
      )
    fireEvent.submit(form)

    await waitFor(
      () => {
        screen.getByText(/Terry/i)
      }
    );
  });

  it("fetches the user's todos right after the user object is fetch (useEffect works)", async () => {
    fetch.mockResponse(JSON.stringify(mockObject));
    render(<App />);
    const input = screen.getByRole("spinbutton");
    const form = screen.getByRole("form");

    fireEvent.change
      (
        input,
        {
          target: { value: 1 }
        }
      )

    fireEvent.submit(form)

    await waitFor(
      () => {
        screen.getByText(/Terry/i)
      }
    );

    await waitFor(
      () => {
        screen.getByText(/Create a cookbook/i)
        screen.getByText(/Start a daily/i)
      }
    )

    expect(fetch).toHaveBeenCalledTimes(2);
  });
});
