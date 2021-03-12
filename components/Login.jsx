import { Grid, Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { loginUser } from "../redux/user-reducer";

const LoginForm = (props) => {
  if (props.isAuth) {
    return <Profile data={props} />;
  }

  const loginForm = (event) => {
    event.preventDefault();

    props.loginUser(event.target.user.value, event.target.pass.value);
  };

  return (
    <Grid.Column>
      <Form onSubmit={loginForm}>
        <Form.Input
          name="user"
          type="text"
          icon="user"
          className="m-2"
          iconPosition="left"
          label="Username"
          placeholder="Username"
        />
        <Form.Input
          name="pass"
          type="text"
          icon="lock"
          className="m-2"
          iconPosition="left"
          label="Password"
          type="password"
        />
        <Button type="submit" content="Login" primary />
      </Form>
    </Grid.Column>
  );
};

export default connect(null, { loginUser })(LoginForm);
