import { Link } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Button, Icon, Table } from "semantic-ui-react";
import CvService from "../services/CvService";

export default function Cv() {
  const [cvs, setcvs] = useState([]);

  useEffect(() => {
    let cvService = new CvService();
    cvService.getAll().then((result) => setcvs(result.data.data));
  }, []);

  return (
    <div>
      <Table celled color={"black"}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İş Arayan</Table.HeaderCell>
            <Table.HeaderCell>Teknolojiler</Table.HeaderCell>
            <Table.HeaderCell>Diller</Table.HeaderCell>
            <Table.HeaderCell>Github</Table.HeaderCell>
            <Table.HeaderCell>Linkedin</Table.HeaderCell>
            <Table.HeaderCell>Detaylar</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cvs.map((cv) => (
            <Table.Row key={cv.id}>
                <Table.Cell>
                    {cv.candidate.firstName},{cv.candidate.lastName}
                </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
