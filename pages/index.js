import "semantic-ui-css/semantic.min.css";
import React from "react";
import { Divider, Grid, Segment } from "semantic-ui-react";
import Login from "./../components/Login";
import SignUp from "../components/SignUp/SignUp";
import { connect } from "react-redux";
import Profile from "../components/Profile";

//TODO: search for the desired chat (name, password), write to the table of this user
//TODO: by the chat id we get a list of all messages

const Home = (props) => {
  if (props.isAuth) {
    return <Profile data={props} />;
  }

  return (
    <Segment className="h-screen" placeholder>
      <Grid columns={2} relaxed="very" stackable>
        <Login />
        <SignUp />
      </Grid>

      <Divider vertical>Or</Divider>
    </Segment>
  );
};

const mapStateToProps = (state) => {
  return state.user;
};

export default connect(mapStateToProps, null)(Home);
