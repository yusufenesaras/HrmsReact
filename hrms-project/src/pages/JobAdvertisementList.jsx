import React, { useState, useEffect } from "react";
import { Table, Header, Icon } from "semantic-ui-react";
import JobAdvertisementService from "../services/jobAdvertisementService";

export default function JobAdvertisementList() {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService.getAll().then((result) => {
      setAdverts(result.data.data);
    
    });
  }, []);

  return (
    <div>
      <Header as="h2">
        <Icon name="list alternate outline" />
        <Header.Content>İş İlanları Listesi</Header.Content>
      </Header>
      <Table color="orange" key="orange">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İş Pozisyonu</Table.HeaderCell>
            <Table.HeaderCell>Şirket İsmi</Table.HeaderCell>
            <Table.HeaderCell>Kontenjan</Table.HeaderCell>
            <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {adverts.map((advert) => (
            <Table.Row key={advert.id}>
              <Table.Cell>{advert.jobtitle.title}</Table.Cell>
              <Table.Cell>{advert.employer.companyName}</Table.Cell>
              <Table.Cell>{advert.quota}</Table.Cell>
              <Table.Cell>{advert.appealExpirationDate}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}