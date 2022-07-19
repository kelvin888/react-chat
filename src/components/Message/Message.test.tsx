import { render } from "@testing-library/react";
import { Message } from "./Message";

describe("<Message />", () => {
  it("Renders a message on the chatroom", () => {
    render(<Message />);
  });
});
