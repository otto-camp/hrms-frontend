import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";

export default function SignedIn({ login, signOut }) {
  return (
    <div>
      <Button onClick={login} color="twitter">
        <Link style={{ color: "#113256" }} to="/login">
          <h1
            className="login"
            style={{ fontSize: 15, paddingLeft: 10, paddingRight: 10 }}
          >
            Giriş
          </h1>
        </Link>
      </Button>
    </div>
  );
}
