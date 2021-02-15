import { Grid, Form, Button } from "semantic-ui-react";

import { InputComponent } from "./common/FormControls";

function LoginForm(props) {
  const loginUser = async (event) => {
    event.preventDefault();

    const res = await fetch("/api/login", {
      body: JSON.stringify({
        username: event.target.user.value,
        password: event.target.pass.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    await res.json();
  };

  return (
    <Grid.Column>
      <Form onSubmit={loginUser}>
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
}

export default LoginForm;
