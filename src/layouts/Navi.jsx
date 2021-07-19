import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Input, Menu } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { userItem } from "../store/initialValues/userItem";

export default function Navi() {
  const { userItem } = useSelector(state => state.auth);

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
          {userItem[0].loggedIn ? <SignedIn /> : <SignedOut />}
        </Menu.Menu>
      </Menu>
    </div>
  );
}
