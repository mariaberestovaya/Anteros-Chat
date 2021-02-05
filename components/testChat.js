import { Button, Input, Container } from "semantic-ui-react";
import { Fragment, useState } from "react";
import { connect } from "react-redux";

function Chat(props) {
  // далее нужно будет проверять есть ли существующий чат
  // let connect = false;
  const [room, setRoom] = useState("");
  const [pass, setPass] = useState("");

  const connectToRoom = async () => {
    const req = await fetch(`http://localhost:3000/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ roomname: room, password: pass }),
    });

    const content = await req.json();

    if (content.length === 0) {
      return console.log("empty");
    } else {
      chat = content;
      return console.log(chat);
    }
  };

  return (
    <Fragment>
      <Container>
        {props.chat.name}
        <div className="home">
          <Input
            placeholder="roomname"
            value={room}
            onInput={(e) => setRoom(e.target.value)}
            required
          />
          <Input
            placeholder="password"
            value={pass}
            onInput={(e) => setPass(e.target.value)}
            required
          />
          <Button onClick={connectToRoom}>connect</Button>

          <br />

          <a href="/connection">connect</a>
        </div>
      </Container>
      <style jsx>{`
        .home {
            display: grid;
            grid-template-columns: 300px;
            grid-row-gap: 0.2rem;

            padding: 10px;

            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%)
          }
        }
      `}</style>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  chat: state.chat,
});

export default connect(mapStateToProps)(Chat);
