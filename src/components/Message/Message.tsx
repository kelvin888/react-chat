import dayjs from "dayjs";
import { FC } from "react";
import CurrentUser from "../../assets/img/current-chat-user.svg";
import OtherUser from "../../assets/img/other-chat-user.svg";
import { MessageProps } from "../../types/message";
interface IMessage extends MessageProps {
  currentUser: string | undefined;
  time: string;
  style?: any;
}

export const Message: FC<IMessage> = ({
  message,
  sender,
  currentUser,
  time,
  style,
}) => {
  const isCurrentUser = currentUser === sender;
  return (
    <li
      style={style}
      className={`flex items-center ${
        isCurrentUser ? "justify-end" : "justify-start"
      } `}
      data-testid="messageListItem"
    >
      <div
        className={`flex flex-col items-start text-xs max-w-xs mx-2 py-1 ${
          isCurrentUser
            ? " bg-purple-900 text-white order-1"
            : "items-end bg-gray-300 text-gray-700 order-2"
        }`}
        data-testid="list-item"
      >
        <div className="flex gap-4 text-[11px] w-full px-4">
          <span className="font-bold">{sender}</span>
          <span>{dayjs(time).format("DD/MM/YY hh:mm a")}</span>
        </div>
        <div className="rounded-lg rounded-br-none bg-blue-600 text-base px-4 w-full">
          {message}
        </div>
      </div>
      <img
        src={isCurrentUser ? CurrentUser : OtherUser}
        alt="current user"
        className={`w-14 h-14 rounded-full`}
      />
    </li>
  );
};
