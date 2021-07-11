import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import JobAdvertAdd from "../pages/JobAdvertAdd";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <GridColumn width={14}>
            <JobAdvertAdd />
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  );
}
