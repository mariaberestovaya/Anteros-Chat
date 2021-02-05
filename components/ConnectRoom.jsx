import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

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

const ConnectRoom = () => {
  const onSubmit = async (value) => {
    const req = await fetch(`http://localhost:3000/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value.name, value.pass),
    });

    return req.json();
  };

  return <LoginReduxForm onSubmit={onSubmit} />;
};

const mapStateToProps = (state) => ({
  chat: state.chat,
});

export default connect(mapStateToProps)(ConnectRoom);
