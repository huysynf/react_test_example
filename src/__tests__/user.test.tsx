// @ts-ignore

import { render, screen } from "@testing-library/react";
import User from "../components/User";
import { server } from "../mocks/server";
import { rest } from "msw";

describe("user test", () => {
  test("should render user component when init", async () => {
    render(<User />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(2);
  });

  test("should render user component when api Error", async () => {
    server.use(
      rest.get("https://jsonplaceholder.typicode.com/users", (rq, rs, ct) => {
        return rs(ct.status(500));
      })
    );
    render(<User />);
    const errorElement = await screen.findByText(/Has Error/i);
    expect(errorElement).toBeInTheDocument();
  });
});
