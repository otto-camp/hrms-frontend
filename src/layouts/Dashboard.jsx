import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import JobAdvertAdd from "../pages/JobAdvertAdd";
import ConfirmJobAdvert from "../pages/ConfirmJobAdvert";
export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <GridColumn width={14}>
            <ConfirmJobAdvert />
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  );
}
