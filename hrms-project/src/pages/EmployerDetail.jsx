import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header, Icon, Table, Grid} from "semantic-ui-react";
import EmployerService from "../services/EmployerService";
export default function EmployerDetail() {

    const [employers, setEmployers] = useState([]);

    useEffect(() => {
      let employerService = new EmployerService();
      employerService
        .getEmployers()
        .then((result) => setEmployers(result.data.data));
    }, []);

    return (
        <div>
            <Grid.Row>
            <Grid.Column width={6}>
              <Table celled color={"black"} stackable>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>İş veren</Table.HeaderCell>
                    <Table.HeaderCell>Bilgiler</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                {employers.map((employer) => (
                  <Table.Body key={employer.id}>
                    <Table.Row textAlign={"left"}>
                      <Table.Cell>
                        <Header as="h4" image>
                          <Header.Content>
                            <Icon name="building" />
                            Şirket Adı
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>
                        {employer.companyName}
                      </Table.Cell>
                    </Table.Row>

                    <Table.Row textAlign={"left"}>
                      <Table.Cell>
                        <Header as="h4" image>
                          <Header.Content>
                            <Icon name="mail" />
                            Email
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>
                        {employer?.email}
                      </Table.Cell>
                    </Table.Row>

                    <Table.Row textAlign={"left"}>
                      <Table.Cell>
                        <Header as="h4" image>
                          <Header.Content>
                            <Icon name="phone" />
                            Telefon
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>
                        {employer.phoneNumber}
                      </Table.Cell>
                    </Table.Row>

                    <Table.Row textAlign={"left"}>
                      <Table.Cell>
                        <Header as="h4" image>
                          <Header.Content>
                            <Icon name="world" />
                            Web Sitesi
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>
                        {employer.webAdress}
                      </Table.Cell>
                    </Table.Row>
                    {}
                  </Table.Body>
                ))}
              </Table>
            </Grid.Column>
            </Grid.Row>
            
        </div>
    )
}
