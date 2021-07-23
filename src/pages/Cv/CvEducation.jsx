import React, { useState } from "react";
import { useEffect } from "react";
import { Table } from "semantic-ui-react";
import CvEducationService from "../../services/CvEducationService";

export default function CvEducation() {
  const [cvEdu, setcvEdu] = useState([]);

  useEffect(() => {
    let cvEducationService = new CvEducationService();
    cvEducationService.getAll().then((result) => setcvEdu(result.data.data));
  }, []);

  return (
    <div>
      <Table celled color={"black"}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Üniversite Adı</Table.HeaderCell>
            <Table.HeaderCell>Fakülte Adı</Table.HeaderCell>
            <Table.HeaderCell>Bölüm Adı</Table.HeaderCell>
            <Table.HeaderCell>Başlangıç Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Mezuniyet Tarihi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cvEdu.map((edu) => (
            <Table.Row key={edu.id}>
              <Table.Cell>{edu.university.universityName}</Table.Cell>
              <Table.Cell>{edu.faculty.facultyName}</Table.Cell>
              <Table.Cell>{edu.section.sectionName}</Table.Cell>
              <Table.Cell>{edu.startDate}</Table.Cell>
              <Table.Cell>{edu.graduationDate}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
