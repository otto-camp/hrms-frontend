import React from "react";
import { Button, Menu } from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
      <Menu size="large" >
        <Menu.Item name="home" />
        <Menu.Item name="messages" />

        <Menu.Menu position="right">
          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}
