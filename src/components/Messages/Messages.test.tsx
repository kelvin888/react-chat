import { render } from "@testing-library/react";
import { Messages } from "./Messages";

describe("<Messages />", () => {
  it("Should render messages from the store", () => {
    render(<Messages />);
  });
});
