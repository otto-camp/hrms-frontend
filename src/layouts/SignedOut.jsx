import React from "react";
import { Button, Icon } from "semantic-ui-react";

export default function SignedOut({ signIn }) {
  return (
    <div>
      <Button onClick={signIn} color="red">
        <Icon name="sign out alternate" />
        Çıkış Yap
      </Button>
    </div>
  );
}
