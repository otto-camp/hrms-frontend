import { useEffect, useState } from "react";
import React from "react";
import JobAdvertService from "../services/JobAdvertService";
import { Table } from "semantic-ui-react";

export default function JobAdvertList() {
  const [jobadverts, setjobadverts] = useState([]);

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getJobAdverts()
      .then(result => setjobadverts(result.data.data));
  }, []);

  return (
    <div>
      <Table celled color="black" key="black">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Pozisyon Adı</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon Sayısı</Table.HeaderCell>
            <Table.HeaderCell>İlan Tarihi</Table.HeaderCell>
            <Table.HeaderCell>İlan Bitiş Tarihi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobadverts.map((jobadvert) => (
            <Table.Row key={jobadvert.id}>
              <Table.Cell>{jobadvert.jobTitle.title}</Table.Cell>
              <Table.Cell>{jobadvert.vacantPositionNumber}</Table.Cell>
              <Table.Cell>{jobadvert.applicationStartDate}</Table.Cell>
              <Table.Cell>{jobadvert.applicationDeadLine}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
