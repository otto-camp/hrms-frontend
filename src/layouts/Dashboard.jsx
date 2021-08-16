import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import JobAdvertAdd from "../pages/JobAdvertAdd";
import ConfirmJobAdvert from "../pages/ConfirmJobAdvert";
import JobAdvertList from "../pages/JobAdvertList";
import { Route } from "react-router";
import Footer from "./Footer";
import CandidateList from "../pages/CandidateList";
import LogIn from "../pages/LogIn";
import CandidateRegister from "../pages/Register/CandidateRegister";
import Cv from "../pages/Cv/Cv";
import CvEducation from "../pages/Cv/CvEducation";
import CvExperience from "../pages/Cv/CvExperience";
import Register from "../pages/Register/Register";
import EmployerRegister from "../pages/Register/EmployerRegister";
import CvPhoto from "../pages/Cv/CvPhoto";
export default function Dashboard() {
  return (
    <div >
      <Grid>
        <Grid.Row width={14}>
          <GridColumn >
            <Route exact path="/" component={JobAdvertList} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/addJob" component={JobAdvertAdd} />
            <Route exact path="/confirmJob" component={ConfirmJobAdvert} />
            <Route exact path="/candidates" component={CandidateList}/>
            <Route exact path="/register/register" component={Register} />
            <Route exact path="/register/registerCandidate" component={CandidateRegister}/>
            <Route exact path="/register/registerEmployer" component={EmployerRegister}/>
            <Route exact path="/candidates/cv" component={Cv}/>
            <Route exact path="/candidates/cvEducation" component={CvEducation}/>
            <Route exact path="/candidates/cvExperience" component={CvExperience}/>
            <Route exact path="/candidates/cvPhoto" component={CvPhoto}/>
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <Footer/>
        </Grid.Row>
      </Grid>
    </div>
  );
}
