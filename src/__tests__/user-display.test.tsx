import React from "react";
import { rest } from "msw";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../utils/test-utils";
import UserDisplay from "../components/users/UserDisplay";
import { server } from "../mocks/server";

test("fetches & receives a user after clicking the fetch user button", async () => {
  server.use(
    rest.get(
      "https://jsonplaceholder.typicode.com/users/1",
      (req, res, ctx) => {
        return res(
          ctx.json({
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
          }),
          ctx.delay(150)
        );
      }
    )
  );
  renderWithProviders(<UserDisplay />);

  // should show no user initially, and not be fetching a user
  expect(screen.getByText(/no user/i)).toBeInTheDocument();
  expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument();

  // after clicking the 'Fetch user' button, it should now show that it is fetching the user
  fireEvent.click(screen.getByRole("button", { name: /Fetch user/i }));
  expect(screen.getByText(/no user/i)).toBeInTheDocument();

  // after some time, the user should be received
  expect(await screen.findByText(/Leanne Graham/i)).toBeInTheDocument();
  expect(screen.queryByText(/no user/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument();
});
