import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Welcome from "./Welcome";

describe("<Welcome />", () => {
  it("Requires user to enter username on first visit", () => {
    render(<Welcome />, { wrapper: BrowserRouter });

    const usernameField = screen.getByPlaceholderText("Enter Username");
    const continueBtn = screen.getByRole("button", { name: /Continue/i });

    expect(usernameField).toBeInTheDocument();
    expect(continueBtn).toBeInTheDocument();
  });
});
