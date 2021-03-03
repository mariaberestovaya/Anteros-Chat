import React from "react";
import { Card, Icon, Grid, Image, Segment } from "semantic-ui-react";
import Chat from "./Chat";

const User = ({ image, description, username }) => {
  return (
    <Card>
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{username}</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          22 Friends
        </a>
      </Card.Content>
    </Card>
  );
};

const Profile = ({ data }) => {
  const { id, image, description, username } = data;
  return (
    <Segment className="h-screen" placeholder>
      <Grid columns={2} relaxed="very" stackable>
        <User image={image} description={description} username={username} />
        <Chat id={id} />
      </Grid>
    </Segment>
  );
};

export default Profile;
