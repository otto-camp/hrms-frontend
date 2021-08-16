import { Button } from "@material-ui/core";
import React from "react";
import { Grid, Icon, Segment } from "semantic-ui-react";

export default function Register() {
  return (
    <div>
      <Segment>
        <Grid columns={2} relaxed="very" >
          <Grid.Column>
              <Icon name="chess queen" />
              <Button color="primary" href="/register/registerEmployer">İş Veren Olarak Kaydol</Button>
          </Grid.Column>
          <Grid.Column>
              <Icon name="chess pawn"/>
              <Button color="primary" href="/register/registerCandidate">İş Arayan Olarak Kaydol</Button>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
}
