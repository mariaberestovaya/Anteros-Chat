import "semantic-ui-css/semantic.min.css";
import React from "react";
import { Divider, Grid, Segment } from "semantic-ui-react";
import Login from "./../components/Login";
import SignUp from "./../components/SignUp";

export default function Home(props) {
  return (
    <Segment className="h-screen" placeholder>
      <Grid columns={2} relaxed="very" stackable>
        <Login />
        <SignUp />
      </Grid>

      <Divider vertical>Or</Divider>
    </Segment>
  );
}
