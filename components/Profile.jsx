import React from "react";
import { Card, Icon, Grid, Image, Segment } from "semantic-ui-react";
import Chat from "./Chat";

const User = ({ data: { data } }) => {
  const { image, description, username } = data;

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

      <Chat />
    </Card>
  );
};

const Profile = (data) => {
  return (
    <Segment className="h-screen" placeholder>
      <Grid columns={2} relaxed="very" stackable>
        <User data={data} />
        <Chat />
      </Grid>
    </Segment>
  );
};

export default Profile;
