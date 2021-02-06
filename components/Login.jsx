import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { getChatMessage } from "../redux/chat_reducer";

const LoginForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field name="room" type="text" component="input" placeholder="roomname" />
      <Field
        name="pass"
        type="password"
        component="input"
        placeholder="password"
      />
      <button>connect</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "connection",
})(LoginForm);

const ConnectToRoom = (props) => {
  const onSubmit = async (value) => {
    props.getChatData(value.room, value.pass);
  };

  return <LoginReduxForm onSubmit={onSubmit} />;
};

const mapStateToProps = (state) => ({
  chat: state.chat,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getChatData: (name, pass) => dispatch(getChatMessage(name, pass)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectToRoom);
