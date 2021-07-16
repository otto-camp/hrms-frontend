import React from "react";
import { Link } from "react-router-dom";
import { Grid, Header, Message, Segment } from "semantic-ui-react";
import CandidateRegister from "../pages/Register/CandidateRegister";
export default function Register() {
  const tabs = [
    {
      menuItem: "İş arayan",
      render: () => <CandidateRegister />,
    },
  ];

  return (
    <div>
      <Grid
        textAlign="center"
        style={{ height: "80vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h1" color="teal" textAlign="center">
            Kayıt Ol
          </Header>
          <Segment stacked>
            <Tab panes={tabs} menu={{ secondary: true }} />
          </Segment>
          <Message>
            <h4>
              Hesabınız zaten var mı?
              <Link style={{ color: "#00b5ad" }} to="/login">
                Giriş yapın!
              </Link>
            </h4>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
}
