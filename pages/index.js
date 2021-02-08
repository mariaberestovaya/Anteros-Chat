import Login from "../components/Login";
import "semantic-ui-css/semantic.min.css";
import Chat from "./../components/Chat";

export default function Home(props) {
  let connect = false;

  return (
    <>
      <div className="flex items-center justify-center w-1/2 h-screen float-left overflow-auto">
        <Login />
      </div>
      {connect ? (
        <Chat />
      ) : (
        <div className="flex items-center justify-center w-1/2 h-screen bg-gray-200 overflow-auto">
          Вы ещё не подключились ни к одному чату
        </div>
      )}
    </>
  );
}
