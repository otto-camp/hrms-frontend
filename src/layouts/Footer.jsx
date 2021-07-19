import React from "react";
import { Menu, Sidebar, Table } from "semantic-ui-react";

export default function Footer() {
  return (
    <div>
      <Sidebar
        as={Menu}
        animation="overlay"
        visible
        direction="bottom"
        width="wide"
      >
        <Table basic>
          <Table.Row>
            <Table.HeaderCell>Hakkımızda</Table.HeaderCell>
            <Table.HeaderCell>Sosyal Medya</Table.HeaderCell>
            <Table.HeaderCell>İletişim</Table.HeaderCell>
          </Table.Row>
        </Table>
      </Sidebar>
    </div>
  );
}
