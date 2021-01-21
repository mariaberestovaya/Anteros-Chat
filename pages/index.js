import { Button, Input, Container } from "semantic-ui-react";
import { Fragment, useState } from "react";
import useSWR from "swr";
import "semantic-ui-css/semantic.min.css";
// гастралируют по коже твои губы
// мои тоже

export default function Home(props) {
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
    console.log(content);

    if (content.length === 0) {
      return console.log("Array empty");
    } else {
      return console.log("OK");
    }

    // мол если всё ок, то отрисовываем чат
  };

  return (
    <Fragment>
      <Container>
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
          <Button onClick={connectToRoom} href="">
            connect
          </Button>
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
