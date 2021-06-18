import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon, Header, Menu, Table } from "semantic-ui-react";
import CandidateService from "../services/CandidateService";

export default function CandidateList() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService.getAll().then((result) => setCandidates(result.data.data));
  }, []);

  return (
    <div>
      <Header as="h2">
        <Icon name="list alternate" />
        <Header.Content className="candidate">Candidate List</Header.Content>
      </Header>
      <Table celled className="c" style={{ border: "2px solid black" }}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>İsim</Table.HeaderCell>
            <Table.HeaderCell>Soy İsim</Table.HeaderCell>
            <Table.HeaderCell>Doğum Tarihi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {candidates.map((candidate) => (
            <Table.Row>
              <Table.Cell>{candidate.email}</Table.Cell>
              <Table.Cell>{candidate.firstName}</Table.Cell>
              <Table.Cell>{candidate.lastName}</Table.Cell>
              <Table.Cell>{candidate.birthDate}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="4">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>

      <br/>
    </div>
  );
}
