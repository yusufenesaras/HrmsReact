import React, { useState, useEffect } from "react";
import EmployerService from "../services/EmployerService";
import { Table, Button } from "semantic-ui-react";

export default function AdminAllEmployersVerifyFalse() {

  const [employers, setEmployers] = useState([])
  let employerService = new EmployerService();
  useEffect(()=>{
      
employerService.getEmployers().then((result)=>setEmployers(result.data.data))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  let changeVerifiedStatus = (id) => {
    employerService.changeVerifiedStatus(id);
    window.location.reload();
  };

  return (
    <div>
      <Button fluid color="teal">
        Onay Bekleyen
      </Button>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell>WebSitesi</Table.HeaderCell>
            <Table.HeaderCell>E-mail address</Table.HeaderCell>
            <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
            <Table.HeaderCell>Onay Durumu :</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {employers?.map((employer, key) => (
          <Table.Body>
            <Table.Row key={key}>
              <Table.Cell>{employer.companyName}</Table.Cell>
              <Table.Cell>{employer.webAdress}</Table.Cell>
              <Table.Cell>{employer.email}</Table.Cell>
              <Table.Cell>{employer.phoneNumber}</Table.Cell>
              <Table.Cell>{employer?.verified ?"Doğrulanmış" : "Doğrulanması gereken güncelleme "}</Table.Cell> 
              <Table.Cell>
                {" "}
                <Button
                  onClick={() => changeVerifiedStatus(employer.id)}
                  fluid
                  color="grey"
                >
                  Onay Durumu değiştir
                </Button>{" "}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>
  );
}
