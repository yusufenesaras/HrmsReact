import React, { useState, useEffect } from "react";

import { Table, Label, Icon, Button } from "semantic-ui-react";
import JobAdService from "../services/JobAdService";

export default function AdminJobAdvertList() {
  
  const [jobAdverts, setJobAdverts] = useState([]);

  useEffect(() => {
    let jobAdService = new JobAdService();
    jobAdService
      .getAll()
      .then((result) => setJobAdverts(result.data.data));
  }, []);

  let changeIsActiveByCandidate = (id) => {
    let jobAdService = new JobAdService();
    jobAdService.changeActiveStatus(id);
    window.location.reload();
  };
  return (
    <div>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket İsmi</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Açık Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Çalışma Şekli</Table.HeaderCell>
            <Table.HeaderCell>İş Tipi</Table.HeaderCell>
            <Table.HeaderCell>Maaş Miktarı</Table.HeaderCell>
            <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Açıklama</Table.HeaderCell>
            <Table.HeaderCell> Admin tarafından onay durumu</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Onay </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdverts.map((jobAdvert, key) => (
            <Table.Row key={key}>
              <Table.HeaderCell collapsing>
                {jobAdvert.employer.companyName}
              </Table.HeaderCell>
              <Table.Cell>{jobAdvert.city.cityName}</Table.Cell>
              <Table.Cell>{jobAdvert.jobtitle.title}</Table.Cell>
              <Table.Cell>{jobAdvert.quota}</Table.Cell>
              <Table.Cell>{jobAdvert.workType.workType}</Table.Cell>
              <Table.Cell>{jobAdvert.workHour.workHours}</Table.Cell>
              <Table.Cell>
                {jobAdvert.minSalary}-{jobAdvert.maxSalary}
              </Table.Cell>
              <Table.Cell>{jobAdvert.appealExpirationDate}</Table.Cell>
              <Table.Cell>{jobAdvert.description}</Table.Cell>
              {jobAdvert.active ? (
                <Table.Cell>
                  <Label color="green" style={{ width: "100%" }}>
                    Aktif
                  </Label>
                </Table.Cell>
              ) : (
                <Table.Cell>
                  <Label color="orange" style={{ width: "100%" }}>
                    Pasif
                  </Label>
                </Table.Cell>
              )}

              <Table.Cell collapsing>
                <Button
                  onClick={() => changeIsActiveByCandidate(jobAdvert.id)}
                  color="green"
                  icon
                  labelPosition="left"
                >
                  <Icon name="checkmark" size="large" />
                  Değiştir
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
