import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function SignedOut() {
  return (
    <div>
      <Button.Group>
        <Button primary as={Link} to={"/login"}>
          Giriş yap
        </Button>
        <Icon name="circle outline" />
        <Button positive as={Link} to={"/register/register"}>
          Kaydol
        </Button>
      </Button.Group>
    </div>
  );
}
