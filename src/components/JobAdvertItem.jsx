import React from "react";
import { Item, Label, Button,Image } from "semantic-ui-react";

export default function JobAdvertItem({
  jobAdvert,
  userType,
  approveJobAdvert,
  declineJobAdvert,
}) {
  return (
    <div>
      <Item.Group key={jobAdvert.id} relaxed >
        <Item.Meta>
          <Image src="https://res.cloudinary.com/hrms-java/image/upload/v1623238990/samples/landscapes/architecture-signs.jpg" size="medium" />
        </Item.Meta>
        <Item.Content verticalAlign="middle">
          <Item.Header
            style={{ width: "100%", textAlign: "right", marginBottom: "0.5em" }}
          >
            {jobAdvert.jobTitle.title}
          </Item.Header>
          <Item.Meta
            style={{
              width: "100%",
              textAlign: "right",
              marginBottom: "0.5em",
            }}
          >
            
          </Item.Meta>
          <Item.Description
            style={{
              width: "100%",
              textAlign: "right",
              marginBottom: "0.5em",
              height: "40%",
            }}
          >
            {jobAdvert.description}
          </Item.Description >
          <Item.Extra style={{textAlign:"right"}} > 
            <Label icon="globe" content={jobAdvert.city.cityName} />
            <Label
              icon="money"
              content={jobAdvert.minSalary + " - " + jobAdvert.maxSalary}
            />
            <Label
              icon="privacy"
              content={jobAdvert.isVerified ? "Aktif" : "Pasif"}
              style={{ marginRight: "2.5em" }}
            />

            {userType === "Employee" ? (
              <Button.Group>
                <Button
                  primary={jobAdvert.positionActive}
                  positive={!jobAdvert.isVerified}
                  onClick={() => {
                    jobAdvert.isVerified
                      ? declineJobAdvert(jobAdvert.id)
                      : approveJobAdvert(jobAdvert.id);
                  }}
                >
                  {jobAdvert.isVerified ? "Onay Kaldır" : "Onayla"}
                </Button>
                <Button.Or text="" />
                <Button negative>Kaldır</Button>
              </Button.Group>
            ) : (
              <Button.Group>
                <Button primary disabled={!jobAdvert.isVerified}>
                  Düzenle
                </Button>
                <Button.Or text="" />
                <Button negative disabled={!jobAdvert.isVerified}>
                  Pasif Yap
                </Button>
              </Button.Group>
            )}
          </Item.Extra>
        </Item.Content>
      </Item.Group>
    </div>
  );
}
const employerButtonGroup = ({ isActive }) => {
  return (
    <Button.Group>
      <Button primary disabled={!isActive}>
        Düzenle
      </Button>
      <Button.Or text="" />
      <Button negative disabled={!isActive}>
        Kaldır
      </Button>
    </Button.Group>
  );
};

const personelButtonGroup = ({ isActive }) => {
  return (
    <Button.Group>
      <Button primary={isActive} positive={!isActive}>
        {isActive ? "Onay Kaldır" : "Onayla"}
      </Button>
      <Button.Or text="" />
      <Button negative>Kaldır</Button>
    </Button.Group>
  );
};
