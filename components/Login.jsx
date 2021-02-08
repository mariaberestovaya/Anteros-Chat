import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { getChatMessage } from "../redux/chat_reducer";
import { Button } from "semantic-ui-react";

import { InputComponent } from "./FormControls";

const LoginForm = ({ handleSubmit }) => {
  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <Field
        name="room"
        type="text"
        component={InputComponent}
        placeholder="roomname"
      />
      <Field
        name="pass"
        type="password"
        component={InputComponent}
        placeholder="password"
      />
      <Button>connect</Button>
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
