import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import JobAdvertAdd from "../pages/JobAdvertAdd";
import ConfirmJobAdvert from "../pages/ConfirmJobAdvert";
import JobAdvertList from "../pages/JobAdvertList";
import { Route } from "react-router";
import Footer from "./Footer";
import CandidateList from "../pages/CandidateList";
import LogIn from "../pages/LogIn";
export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row width={14}>
          <GridColumn >
            <Route exact path="/" component={JobAdvertList} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/addJob" component={JobAdvertAdd} />
            <Route exact path="/confirmJob" component={ConfirmJobAdvert} />
            <Route exact path="/candidates" component={CandidateList}/>
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <Footer/>
        </Grid.Row>
      </Grid>
    </div>
  );
}
