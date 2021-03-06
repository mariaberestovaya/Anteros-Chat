import { getUserChat } from "../redux/chat-reducer";
import { getUserMessages } from "../redux/message-reducer";
import { connect } from "react-redux";
import { useEffect } from "react";
// import Link from "next/link";
import { Fragment } from "react";

const Chat = ({ id, getUserChat, getUserMessages, chat, message }) => {
  useEffect(() => {
    getUserChat(id);
    getUserMessages("603beeb2b97d322ba0f39750");
  });

  if (!chat) {
    return <div>loading...</div>;
  }

  return (
    <Fragment>
      <a>{chat.name}</a>
      {/* <Link href={`/chats/${encodeURIComponent(id)}`}>
        <a>{chat.name}</a>
      </Link> */}

      {message &&
        message.messages.map((e) => <div key={e._id}>{e.content}</div>)}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  chat: state.chat,
  message: state.message,
});

export default connect(mapStateToProps, { getUserChat, getUserMessages })(Chat);
