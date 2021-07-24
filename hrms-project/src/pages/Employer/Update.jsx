import React, { useState, useEffect } from "react";
import { Card, Label } from "semantic-ui-react";
import EmployerService from "../../services/EmployerService";

export default function CvUpdate() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getByIdForEmployers(1)
      .then((result) => setEmployers(result.data.data));
  }, []);

  return (
    <div>
      <div style={{ backgroundColor: "skyblue", height: "30px" }}>
        {" "}
        <Card.Header>
          {" "}
          <Label ribbon>İşveren Bilgisi</Label>{" "}
        </Card.Header>
      </div>
      {employers?.map((employer) => (
          <Card  fluid key={employer.id}>
            <Card.Content >
              <Card.Header>{employer.companyName}</Card.Header>
              <Card.Meta>{employer.webAddress}</Card.Meta>
              <Card.Description>
                <p>
                  <b>Eposta: </b>
                  {employer.email}
                </p>
                <p>
                  <b>Telefon: </b>
                  {employer.phoneNumber}
                </p>
              </Card.Description>
            </Card.Content>
          </Card>
        ))}
    </div>
  );
}
