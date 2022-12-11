import { renderWithRouter } from "../utils/test-utils";
import { findByRole, render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

describe("router test", () => {
  test("full app rendering/navigating", async () => {
    renderWithRouter(<App />);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });

  test("not found page", () => {
    renderWithRouter(<App />, { route: "/something-that-does-not-match" });
    expect(screen.getByText(/No Match/i)).toBeInTheDocument();
  });

  test("navigate to user", async () => {
    renderWithRouter(<App />, { route: "/user/1" });
    const userElement = await screen.findByRole("heading", {
      level: 1,
    });
    expect(userElement).toBeInTheDocument();
  });
});
