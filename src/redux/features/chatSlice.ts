import { createSlice } from "@reduxjs/toolkit";
import { MessageProps } from "../../types/message";
import { RootState } from "../store/store";

interface ChatState {
  messages: MessageProps[];
}

const initialState: ChatState = {
  messages: [],
};

export const chatSlice = createSlice({
  name: "chatRoom",
  initialState,
  reducers: {
    saveMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    refreshStore: (state) => {
      state.messages = [...state.messages];
    },
  },
});

export const { saveMessage, refreshStore } = chatSlice.actions;

export const selectMessages = (state: RootState) => state.chatData.messages;

export default chatSlice.reducer;
