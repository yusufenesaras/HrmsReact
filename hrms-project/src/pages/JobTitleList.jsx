import React from "react";
import { useState, useEffect } from "react";
import { Table, Header, Icon } from "semantic-ui-react";
import JobTitleService from "../services/jobTitleService";

export default function JobTitleList() {
  const [jobTitles, setJobTitles] = useState([]);

  useEffect(() => {
    let jobTitleService = new JobTitleService();
    jobTitleService.getJobTitle()
      .then((result) => setJobTitles(result.data.data));
  }, []);

  return (
    <div>
     <Header as="h2">
        <Icon name="list alternate outline" />
        <Header.Content>İş Pozisyonu Listesi</Header.Content>
      </Header>
      <Table color="blue" key="blue">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İş Pozisyonları</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {jobTitles.map((jobTitle) => (
            <Table.Row key={jobTitle.id}>
              <Table.Cell>{jobTitle.title}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
