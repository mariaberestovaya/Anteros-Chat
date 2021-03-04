import { Form, Button, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { addUserRegister } from "../../redux/user-reducer";

const SignUpForm = ({ setEvent, addUserRegister }) => {
  function register(event) {
    event.preventDefault();
    const input = event.target;
    addUserRegister(
      input.name.value,
      input.login.value,
      input.pass.value,
      input.image.value,
      input.text.value
    );
  }

  return (
    <Grid.Column>
      <Form onSubmit={register}>
        <Form.Group widths="equal">
          {/* name */}
          <Form.Input
            name="name"
            fluid
            label="Your name"
            placeholder="Your name"
          />
          {/* login */}
          <Form.Input name="login" fluid label="Login" placeholder="Login" />
        </Form.Group>
        <Form.Group widths="equal">
          {/* pass && pass_again */}
          <Form.Input
            name="pass"
            fluid
            label="Password"
            placeholder="Password"
          />
          <Form.Input
            fluid
            name="pass_again"
            label="Repeat password"
            placeholder="Repeat password"
          />
        </Form.Group>
        <Form.Group widths="equal">
          {/* text */}
          <Form.TextArea
            style={{ resize: "none" }}
            name="text"
            label="About"
            placeholder="Tell us more about you..."
          />
          {/* image */}
          <Form.Input fluid label="Image" placeholder="Image" name="image" />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Button size="large" onClick={() => setEvent(false)}>
            Back
          </Form.Button>
          <Form.Button size="large">Submit</Form.Button>
        </Form.Group>
      </Form>
    </Grid.Column>
  );
};

export default connect(null, { addUserRegister })(SignUpForm);
