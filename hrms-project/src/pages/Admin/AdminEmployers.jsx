import React from "react";
import { Button, Divider, Grid } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import AdminAllEmployerList from "./AdminAllEmployerList";
import { Route } from "react-router";
import AdminAllEmployersVerifyFalse from "./AdminAllEmployersVerifyFalse";
export default function AdminEmployers() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Button.Group widths="5">
            <Button as={NavLink} to="adminallemployersverifyfalse" color="blue">
              Güncelleme Onayı Bekleyen Şirketler
            </Button>
            <Button as={NavLink} to="/adminallemployers" color="black">
              Tüm şirketlere göz at
            </Button>
            <Button color="blue">y</Button>
            <Button color="black">z</Button>
            <Button color="blue">w</Button>
          </Button.Group>
        </Grid.Row>
      </Grid>
    </div>
  );
}
