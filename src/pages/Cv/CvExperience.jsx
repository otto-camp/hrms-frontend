import React, { useState } from "react";
import { useEffect } from "react";
import { Table } from "semantic-ui-react";
import CvExperienceService from "../../services/CvExperienceService";

export default function CvEducation() {
  const [cvExp, setcvExp] = useState([]);

  useEffect(() => {
    let cvExperienceService = new CvExperienceService();
    cvExperienceService.getAll().then((result) => setcvExp(result.data.data));
  }, []);

  return (
    <div>
      <Table celled color={"black"}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İş Yeri Adı</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon Adı</Table.HeaderCell>
            <Table.HeaderCell>Başlangıç Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Bitiş Tarihi Tarihi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cvExp.map((exp) => (
            <Table.Row key={exp.id}>
              <Table.Cell>{exp.companyName}</Table.Cell>
              <Table.Cell>{exp.positionName}</Table.Cell>
              <Table.Cell>{exp.startDate}</Table.Cell>
              <Table.Cell>{exp.endDate}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
