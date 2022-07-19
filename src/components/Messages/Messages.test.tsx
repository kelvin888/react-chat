import { render, screen } from "@testing-library/react";
import { saveMessage } from "../../redux/features/chatSlice";
import { store } from "../../redux/store/store";
import { Messages } from "./Messages";

describe("<Messages />", () => {
  it("Should render messages from the store", () => {
    store.dispatch(
      saveMessage({
        message: "Yo Peeps",
        sender: "Admin",
        time: new Date().toISOString(),
      })
    );
    const messages = store.getState().chatData.messages;

    render(
      <Messages messages={messages} msgContainerRef={null} userId="Admin" />
    );

    const adminMsg = screen.getByText("Yo Peeps");
    expect(adminMsg).toBeInTheDocument();
  });
});
