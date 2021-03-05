import "semantic-ui-css/semantic.min.css";
import React from "react";
import { Divider, Grid, Segment } from "semantic-ui-react";
import Login from "./../components/Login";
import SignUp from "../components/SignUp/SignUp";
import { connect } from "react-redux";
import Profile from "../components/Profile";

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
