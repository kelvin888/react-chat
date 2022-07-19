import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../redux/store/store";
import { Chat } from "./Chat";

describe("<Chat />", () => {
  it("Should initially set messages to an empty array", () => {
    const state = store.getState().chatData;
    expect(state.messages).toEqual([]);
  });

  it("Should allow a user to send a message to chat room", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/chat/Admin"]}>
          <Chat />
        </MemoryRouter>
      </Provider>
    );

    //enter message
    const searchField = screen.getByPlaceholderText("Type a new message");

    fireEvent.change(searchField, { target: { value: "Hi People" } });

    //press send button
    const searchButton = screen.getByRole("button", { name: /Send/i });
    userEvent.click(searchButton);

    //its going to be the only message, so just get the first
    const chatState = store.getState().chatData.messages[0].message;
    expect(chatState).toEqual("Hi People");
  });
});
