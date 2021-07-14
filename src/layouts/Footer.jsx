import React from "react";
import { Button, Menu, Sidebar } from "semantic-ui-react";

export default function Footer() {
  return (
    <div>
      <Sidebar
        as={Menu}
        animation="overlay"
        visible
        inverted
        direction="bottom"
        width="wide"
      >
        <Menu.Item as="a">
          <Button color="brown">AnaSayfa</Button>
        </Menu.Item>
        <Menu.Item as="a">
          <Button color="brown">Sosyal Medya</Button>
        </Menu.Item>
        <Menu.Item as="a">
          <Button color="brown">Destek</Button>
        </Menu.Item>
      </Sidebar>
    </div>
  );
}
