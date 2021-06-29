import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Button, Icon} from "semantic-ui-react";
import CandidateCvService from "../services/CandidateCvService";
import { NavLink } from "react-router-dom";

export default function CvList() {
  const [cadidateCv, setCandidatesCv] = useState([]);

  useEffect(() => {
    let candidateCvService = new CandidateCvService();
    candidateCvService
      .getAll()
      .then((result) => setCandidatesCv(result.data.data));
  });

  return (
    <div>
      <h4>CV Önizleme</h4>
      <Table celled color={"black"}>
        <Table.Header celled color={"black"}>
          <Table.Row>
            <Table.HeaderCell>Açıklama</Table.HeaderCell>
            <Table.HeaderCell>Github Address</Table.HeaderCell>
            <Table.HeaderCell>LinkedIn Address</Table.HeaderCell>
            <Table.HeaderCell>Detayları Gör</Table.HeaderCell>
            <Table.HeaderCell>İşlemler</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {cadidateCv.map((cadidatecv) => (
            <Table.Row>
              <Table.Cell>{cadidatecv.coverLetter}</Table.Cell>
              <Table.Cell>
                <a
                  href={cadidatecv.githubAddress}
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <Button secondary>
                    <Icon name="github" /> Github
                  </Button>
                </a>
              </Table.Cell>
              <Table.Cell>
                <a
                  href={cadidatecv.linkedinAddress}
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <Button color="linkedin">
                    <Icon name="linkedin" /> LinkedIn
                  </Button>
                </a>
              </Table.Cell>
              <Table.Cell>
                <Button as={Link} to={`/cvs/${cadidatecv.candidateId}`}>
                  <Button.Content visible>Detayları Gör</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Table.Cell>
              <br/>
              <Button
                as={NavLink}
                to={`/cvs/edit/${cadidatecv.candidateId}`}
                color="blue"
                floated="right"
                size="tiny"
              >
                Düzenle
              </Button>

              {/* <CardContent extra>
                <Button
                  basic
                  color="green"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  Güncelle
                </Button>

                <Button
                  basic
                  color="red"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  Sil
                </Button>
              </CardContent> */}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
