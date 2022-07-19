import { FC, Ref } from "react";
import { Virtuoso, VirtuosoHandle } from "react-virtuoso";
import { v4 as uuidv4 } from "uuid";
import { MessageProps } from "../../types/message";
import { Message } from "../Message/Message";
export const Messages: FC<{
  messages: MessageProps[];
  msgContainerRef: Ref<VirtuosoHandle> | undefined;
  userId: string | undefined;
}> = ({ messages, msgContainerRef, userId }) => {
  return (
    <Virtuoso
      style={{ height: "100%", width: "100%" }}
      //   totalCount={messages.length}
      data={messages}
      ref={msgContainerRef}
      initialItemCount={messages.length}
      //   size={25}
      initialTopMostItemIndex={messages.length - 1}
      followOutput="smooth"
      itemContent={(_index, item) => (
        <Message
          key={uuidv4()}
          message={item?.message}
          sender={item?.sender}
          time={item?.time}
          currentUser={userId}
        />
      )}
    />
  );
};
