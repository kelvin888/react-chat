import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { VirtuosoHandle } from "react-virtuoso";
import { Messages } from "../../components/Messages/Messages";
import { saveMessage } from "../../redux/features/chatSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";

export const Chat = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const { messages } = useAppSelector((state) => state.chatData);
  const dispatch = useAppDispatch();
  const msgContainerRef = useRef<VirtuosoHandle | null>(null);

  let { userId } = useParams();

  useEffect(() => {
    if (!userId) {
      navigate("/");
    }
  }, [navigate, userId]);

  const messageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message) {
      dispatch(
        saveMessage({
          message,
          sender: userId || "",
          time: new Date().toISOString(),
        })
      );
      setMessage("");
    }
  };

  return (
    <main className="border border-t-8 border-t-purple-900 w-full lg:max-w-2xl min-w-[360px] h-screen mx-auto relative overflow-hidden">
      <ul
        className="h-[calc(100vh_-_96px)] bg-white py-4 flex flex-col gap-2 px-6 absolute w-full overflow-y-scroll"
        data-testid="messageList"
      >
        <Messages
          messages={messages}
          msgContainerRef={msgContainerRef}
          userId={userId}
        />
      </ul>
      <footer className="bg-purple-900 absolute bottom-0 w-full lg:max-w-2xl min-w-[360px]">
        <form className=" flex gap-4 p-6" onSubmit={handleSubmit}>
          <input
            placeholder="Type a new message"
            type="text"
            className="rounded-2xl flex-1 py-2 px-3"
            value={message}
            onChange={messageHandler}
            multiple
          />
          <button type="submit" className="bg-white rounded-2xl px-8 py-2">
            Send
          </button>
        </form>
      </footer>
    </main>
  );
};
