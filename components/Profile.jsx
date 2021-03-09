import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import Chat from "./Chat";

const User = ({ image, description, username }) => {
  return (
    <div className="ui items">
      <div className="item">
        <div className="image">
          <img src={image} />
        </div>
        <div className="content">
          <div className="header">{username}</div>
          <div className="meta">{description}</div>
          {/* <div className="description">Description</div>
          <div className="extra">Extra</div> */}
        </div>
      </div>
    </div>
  );
};

const Profile = ({ data }) => {
  const { _id, image, description, username } = data;
  return (
    <Segment className="h-screen" placeholder>
      <Grid columns={2} relaxed="very" stackable>
        <User image={image} description={description} username={username} />
        <Chat id={_id} />
      </Grid>
    </Segment>
  );
};

export default Profile;
