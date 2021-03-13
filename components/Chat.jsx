// import { getUserChat } from "../redux/chat-reducer";
import {
  getUserMessages,
  createNewMessages,
  getUserChat,
} from "../redux/chat-reducer";
import { connect } from "react-redux";
import { useEffect } from "react";
// import Link from "next/link";
import { Fragment } from "react";
import { Input, Form, Button } from "semantic-ui-react";

function Chat({
  id,
  getUserChat,
  createNewMessages,
  getUserMessages,
  chat,
  message,
}) {
  useEffect(() => {
    getUserChat(id);
    if (chat) {
      getUserMessages(chat._id);
    }
  });

  if (!chat) {
    return <div>loading...</div>;
  }

  function new_messages(e) {
    e.preventDefault();
    createNewMessages(id, chat._id, e.target.mess.value);
    console.log(id, chat._id, e.target.mess.value);
  }

  return (
    <Fragment>
      <p>
        chatname: <a>{chat.chatname}</a>
      </p>
      {message && message.map((e) => <div key={e._id}>{e.content}</div>)}
      <Form onSubmit={new_messages}>
        <Input name="mess" />
        <Button>submit</Button>
      </Form>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  chat: state.chat.chats[0],
  message: state.chat.messages,
});

export default connect(mapStateToProps, {
  getUserChat,
  getUserMessages,
  createNewMessages,
})(Chat);
