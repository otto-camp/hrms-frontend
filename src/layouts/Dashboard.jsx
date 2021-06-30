import React from "react";
import { Grid } from "semantic-ui-react";
import CandidateList from "../pages/CandidateList";
import JobAdvertList from "../pages/JobAdvertList";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <JobAdvertList/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}