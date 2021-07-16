import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Input, Menu } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const history = useHistory();

  function handleSignOut(params) {
    setisAuthenticated(false);
    history.push("/");
  }
  function handleSignIn(params) {
    setisAuthenticated(true);
  }

  return (
    <div>
      <Menu size="small">
        <Link style={{ color: "#0A5D80" }} to="/">
          <h1
            className="logo"
            style={{ fontSize: 35, paddingLeft: 10, paddingRight: 10 }}
          >
            HRMS
          </h1>
        </Link>
        <Menu.Item>
          <Input action="Ara" placeholder="İlan Ara" />
        </Menu.Item>
        <Menu.Menu position="right">
          {isAuthenticated ? (
            <SignedIn signOut={handleSignOut} />
          ) : (
            <SignedOut signIn={handleSignIn} />
          )}
        </Menu.Menu>
      </Menu>
    </div>
  );
}
