import { render } from "@testing-library/react";
import Welcome from "./Welcome";

describe("<Welcome />", () => {
  it("Requires user to enter username on first visit", () => {
    render(<Welcome />);
  });
});
