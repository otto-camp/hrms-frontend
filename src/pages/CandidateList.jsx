import React, { useState, useEffect } from "react";
import CandidateService from "../services/CandidateService";
import { Card } from "react-bootstrap";

export default function CandidateList() {
  const [candidates, setcandidates] = useState([]);

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService
      .getCandidates()
      .then((result) => setcandidates(result.data.data));
  }, []);

  return (
    <Card fluid bg="light" >
      {candidates.map((can) => (
        <Card.Body key={can.id}>
          <Card.Img variant="top" src={can.cvPhotos.photoUrl} />
          <Card.Link href="/candidates/cv">
            {can.firstName} {can.lastName}
          </Card.Link>
          <Card.Text>
            {can.email}
            <br />
            {can.birthDate}
          </Card.Text>
          <Card.Link href="/candidates/cvEducation">Eğitim Bilgileri</Card.Link>
          <Card.Link href="/candidates/cvExperience">İş Tecrübeleri</Card.Link>
        </Card.Body>
      ))}
    </Card>
  );
}
