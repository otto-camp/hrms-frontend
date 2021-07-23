import { Link } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Button, Icon, Table } from "semantic-ui-react";
import CvService from "../../services/CvService";

export default function Cv() {
  const [cvs, setCvs] = useState([]);

  useEffect(() => {
    let cvService = new CvService();
    cvService.getAll().then((result) => setCvs(result.data.data));
  }, []);

  return (
    <div>
      <Table celled color={"black"}>
        <Table.Header>
          <Table.Row>
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
              <Table.Cell>{cv.skills}</Table.Cell>
              <Table.Cell>{cv.programmingLanguage}</Table.Cell>
              <Table.Cell>{cv.githubLink}</Table.Cell>
              <Table.Cell>{cv.linkedinLink}</Table.Cell>
              <Table.Cell>{cv.coverLetter}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
