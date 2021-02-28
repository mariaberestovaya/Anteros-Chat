import { Grid, Button, Form } from "semantic-ui-react";
import React, { useState, Fragment } from "react";
import SignUpForm from "./SignUpForm";

const SignUpButton = (props) => {
  return (
    <Grid.Column verticalAlign="middle">
      <Button
        content="Sign up"
        icon="signup"
        size="big"
        onClick={() => props.setEvent(true)}
      />
    </Grid.Column>
  );
};

const SignUp = (props) => {
  const [event, setEvent] = useState(false);
  return (
    <Fragment>
      {event ? (
        <SignUpForm setEvent={setEvent} />
      ) : (
        <SignUpButton setEvent={setEvent} />
      )}
    </Fragment>
  );
};

export default SignUp;
