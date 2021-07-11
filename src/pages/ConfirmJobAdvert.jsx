import React, { useEffect, useState } from "react";
import JobAdvertService from "../services/JobAdvertService";
import CustomHeader from "../components/CustomHeader";
import { Item } from "semantic-ui-react";
import JobAdvertItem from "../components/JobAdvertItem";

export default function ConfirmJobAdvert() {
  const [JobAdverts, setJobAdverts] = useState([]);

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getJobAdverts()
      .then((result) => setJobAdverts(result.data.data));
  }, []);

  function handleApprove(jobAdvertId) {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .confirmJobAdvert(jobAdvertId.id, true)
      .then((result) => window.alert(result.data.data))
      .catch((error) => window.alert(error.message));
  }
  function handleDecline(jobAdvertId) {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .confirmJobAdvert(jobAdvertId.id, false)
      .then((result) => window.alert(result.data.data))
      .catch((error) => window.alert(error.message));
  }

  return (
    <div>
      <CustomHeader title="Tüm ilanlar" icon="users" />
      <Item.Group divided>
        {JobAdverts.map((jobAdvert) => (
          <JobAdvertItem
            jobAdvert={jobAdvert}
            userType="Employee"
            approveJobAdvert={handleApprove}
            declineJobAdvert={handleDecline}
          />
        ))}
      </Item.Group>
    </div>
  );
}
