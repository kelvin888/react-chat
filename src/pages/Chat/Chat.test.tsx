import { render } from "@testing-library/react";
import { Chat } from "./Chat";

describe("<Chat />", () => {
  it("Should initially set messages to an empty array", () => {
    render(<Chat />);
  });

  it("Should allow a user to send a message to chat room", async () => {
    render(<Chat />);
  });
});
