import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { getChatMessage } from "../redux/chat_reducer";
import { Grid, Form, Button } from "semantic-ui-react";

import { InputComponent } from "./common/FormControls";

const LoginForm = ({ handleSubmit }) => {
  return (
    <Grid.Column>
      <Form onSubmit={handleSubmit}>
        <Field
          name="login"
          type="text"
          component={InputComponent}
          icon="user"
          iconPosition="left"
          label="Username"
          placeholder="Username"
        />
        <Field
          name="password"
          type="text"
          component={InputComponent}
          icon="lock"
          iconPosition="left"
          label="Password"
          type="password"
        />
        <Button content="Login" primary />
      </Form>
    </Grid.Column>
  );
};

const LoginReduxForm = reduxForm({
  form: "connection",
})(LoginForm);

const ConnectToRoom = (props) => {
  const onSubmit = async (value) => {
    // props.getChatData(value.room, value.pass);
    console.log(value);
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
