import React, { useState, useEffect } from "react";
import JobAdService from "../services/JobAdService";
import { Table, Label, Icon, Button } from "semantic-ui-react";

export default function EmployerJobAdvertList() {
  const [jobAdverts, setJobAdverts] = useState([]);

  useEffect(() => {
    let jobAdService = new JobAdService();
    jobAdService
      .getEmployerJobAds(1)
      .then((result) => setJobAdverts(result.data.data));
  }, []);

  let changeIsOpenByEmployer = (id) => {
    let jobAdService = new JobAdService();
    jobAdService.getAllOpenJobAdvertByEmployer(id);
    window.location.reload();
  };

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell rowSpan="2">Şehir</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Pozisyon</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Açık Pozisyon</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Çalışma Şekli</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">İş Tipi</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Maaş Miktarı</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Son Başvuru Tarihi</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Açıklama</Table.HeaderCell>
            <Table.HeaderCell colSpan="3" textAlign="center">
              {" "}
              Durum
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>Sizin Tarafınızdan</Table.HeaderCell>
            <Table.HeaderCell>Admin Tarafından</Table.HeaderCell>
            <Table.HeaderCell rowSpan="3">
              İlanın <br></br>Durumunu <br></br>değiştir
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdverts.map((jobAdvert, key) => (
            <Table.Row key={key}>
              <Table.Cell>{jobAdvert.city.cityName}</Table.Cell>
              <Table.Cell>{jobAdvert.jobtitle.title}</Table.Cell>
              <Table.Cell>{jobAdvert.quota}</Table.Cell>
              <Table.Cell>{jobAdvert.workType.workType}</Table.Cell>
              <Table.Cell>{jobAdvert.workHour.workHours}</Table.Cell>
              <Table.Cell>
                {jobAdvert.minSalary} ₺ - {jobAdvert.maxSalary} ₺
              </Table.Cell>
              <Table.Cell>{jobAdvert.appealExpirationDate}</Table.Cell>
              <Table.Cell>{jobAdvert.description}</Table.Cell>
              {jobAdvert.isVerified ? (
                <Table.Cell>
                  <Label color="green" style={{ width: "100%" }}>
                    İş ilanı Açık
                  </Label>
                </Table.Cell>
              ) : (
                <Table.Cell>
                  <Label color="red" style={{ width: "100%" }}>
                    İş ilanı Kapalı
                  </Label>
                </Table.Cell>
              )}
              {jobAdvert.confirmed ? (
                <Table.Cell>
                  <Label color="green" style={{ width: "100%" }}>
                    Admin tarafından onaylı
                  </Label>
                </Table.Cell>
              ) : (
                <Table.Cell>
                  <Label color="orange" style={{ width: "100%" }}>
                    Admin tarafından hala pasif
                  </Label>
                </Table.Cell>
              )}
              <Table.Cell collapsing>
                <Button
                  onClick={() => changeIsOpenByEmployer(jobAdvert.id)}
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
