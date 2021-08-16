import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import CvPhotoService from "../../services/CvPhotoService";

export default function CvPhoto() {
  const [cvPhotos, setcvPhotos] = useState([]);
  useEffect(() => {
    let cvPhotoService = new CvPhotoService();
    cvPhotoService.getAll().then((result) => setcvPhotos(result.data.data));
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
        </tr>
      </thead>
      <tbody>
        {cvPhotos.map((photo) => (
          <tr key={photo.id}>
            <td>{photo.photoUrl}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
