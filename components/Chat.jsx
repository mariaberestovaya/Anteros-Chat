import { getUserChat } from "../redux/chat-reducer";
import { connect } from "react-redux";
import { useEffect } from "react";
import Link from "next/link";

const Chat = ({ id, getUserChat, chat }) => {
  useEffect(() => {
    getUserChat(id);
  });

  if (!chat) {
    return <div>loading...</div>;
  }

  return (
    <Link href={`/chats/${encodeURIComponent(id)}`}>
      <a>{chat.name}</a>
    </Link>
  );
};

const mapStateToProps = (state) => ({
  chat: state.chat,
});

export default connect(mapStateToProps, { getUserChat })(Chat);
