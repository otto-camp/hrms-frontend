import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Input, Menu } from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
      <Menu size="small">
        <Link style={{ color: "#0A5D80" }} to="/">
          <h1
            className="logo"
            style={{ fontSize: 35, paddingLeft: 10, paddingRight: 10 }} >
            HRMS
          </h1>
        </Link>
        <Menu.Item>
          <Input action="Ara" placeholder="İlan Ara" />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button.Group>
              <Button animated="fade" color="facebook">
                <Button.Content visible>Giriş Yap</Button.Content>
                <Button.Content hidden>
                  <Icon name="sign-in" />
                </Button.Content>
              </Button>
              <Button animated="fade" color="instagram">
                <Button.Content visible>Kayıt Ol</Button.Content>
                <Button.Content hidden>
                  <Icon name="key" />
                </Button.Content>
              </Button>
            </Button.Group>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}
