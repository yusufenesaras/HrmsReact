import React, { useState, useEffect } from "react";
import EmployerService from "../services/EmployerService";
import { Card, Icon, Button, Grid } from "semantic-ui-react";

export default function ActiveEmployer() {

    const [employer, setEmployer] = useState(null);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService.getByIdForAdmins(1).then((result) => setEmployer(result.data.data));
  }, []);

    return (
        <div>
             <Grid>
        <Card fluid>
          <Card.Content>
            <Card.Header>{employer?.companyName}</Card.Header>
            <Card.Meta>
              <span className="date">{employer?.email}</span>
            </Card.Meta>
            <Card.Description>{employer?.webAdress}</Card.Description>
            <Card.Description>{employer?.phoneNumber}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              
            </a>
            {/* <ActiveEmployerUpdate employer={employer}></ActiveEmployerUpdate> */}
          </Card.Content>
          <Button></Button>
        </Card>
      </Grid>
        </div>
    )
}
