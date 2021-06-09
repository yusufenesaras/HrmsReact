import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import EmployerList from "../pages/EmployerList";
import JobAdvertisementList from "../pages/JobAdvertisementList";
import JobTitleList from "../pages/JobTitleList";

export default function Fragment() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <GridColumn size={14}>
            <JobTitleList/>
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={14}>
            <EmployerList />
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={14}>
            <JobAdvertisementList />
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  );
}
