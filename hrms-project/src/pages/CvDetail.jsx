import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Table,Image} from "semantic-ui-react";
import CandidateCvService from "../services/CandidateCvService";

export default function CvDetail() {
  let { id } = useParams();

  const [cv, setCv] = useState([]);

  useEffect(() => {
    let candidateCvService = new CandidateCvService();

    candidateCvService.findByCandidateId(id).then((result) => setCv(result.data.data));
  }, [id]);
  return (
    <div>
      
      <Table.Body key={cv.candidateId}>
        {/* <CardGroup>
        <Table.Header celled color={"black"}>
          <Table.Row>
          <Card fluid>
            <Card.Content> */}
              {cv.map((cv) => (
                <Image
                className="cardsUi"
                  floated="center"
                  size="small"
                  src={cv?.avatarUrl}
                  circular
                  key={cv?.id}
                />
              ))}
            {/* </Card.Content>
          </Card>
          </Table.Row>
        </Table.Header>
         
        </CardGroup> */}
      </Table.Body>
     
      <Table celled color={"black"}>
        <Table.Header celled color={"black"}>
          <Table.Row>
            <Table.HeaderCell>Okul Adı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body key={cv.candidateId}>
          {cv.map((cv) => (
            <Table.Cell>{cv?.schools[0].schoolName}</Table.Cell>
          ))}
        </Table.Body>
      </Table>

      <Table celled color={"black"}>
        <Table.Header celled color={"black"}>
          <Table.Row>
            <Table.HeaderCell>Bölüm</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body key={cv.candidateId}>
          {cv.map((cv) => (
            <Table.Cell>{cv?.schools[0].department}</Table.Cell>
          ))}
        </Table.Body>
      </Table>

      <Table celled color={"black"}>
        <Table.Header celled color={"black"}>
          <Table.Row>
            <Table.HeaderCell>Başlama Tarihi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body key={cv.candidateId}>
          {cv.map((cv) => (
            <Table.Cell>{cv?.schools[0].entryDate}</Table.Cell>
          ))}
        </Table.Body>
      </Table>

      <Table celled color={"black"}>
        <Table.Header celled color={"black"}>
          <Table.Row>
            <Table.HeaderCell>Mezun Tarihi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body key={cv.candidateId}>
          {cv.map((cv) => (
            <Table.Cell>{cv?.schools[0].graduationDate}</Table.Cell>
          ))}
        </Table.Body>
      </Table>

      <Table celled color={"black"}>
        <Table.Header celled color={"black"}>
          <Table.Row>
            <Table.HeaderCell>Yetenekler</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {cv.map((cv) => (
            <Table.Cell>{cv?.talents[0].talentName}</Table.Cell>
          ))}
        </Table.Body>
      </Table>

      <Table celled color={"black"}>
        <Table.Header celled color={"black"}>
          <Table.Row>
            <Table.HeaderCell>Bildiği Diller</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {cv.map((cv) => (
            <Table.Cell>{cv?.languages[0].languagesName}</Table.Cell>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
