import React from "react";
import { Link } from "react-router-dom";
import { Icon, Menu, Card, Image, Grid } from "semantic-ui-react";

export default function SideBar() {
  return (
    <div>
      <Menu fluid compact icon="labeled" vertical>
        <Menu.Item as={Link} to={"/jobads"}>
          <Icon name="bullhorn" />
          İş ilanları
        </Menu.Item>

        <Menu.Item as={Link} to={"/employers"}>
          <Icon name="users" />
          İş verenler
        </Menu.Item>

        <Menu.Item as={Link} to={"/cvs"}>
          <Icon name="wordpress forms" />
          Cvler 
        </Menu.Item>
      </Menu> <br></br>  <br></br>
      <Grid.Column className="jobAdCreate">
        <Link to="/jobAdCreate">
          <Card>
            <Image
              src={
                "https://cdn2.iconfinder.com/data/icons/leto-most-searched-mix-3/64/__add_plus_table-512.png"
              }
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>
                İlan Ekle
              </Card.Header>
              <Card.Meta></Card.Meta>
              <Card.Description>
                İş veren olarak iş ilanı ekleyebilirsiniz.
              </Card.Description>
            </Card.Content>
          </Card>
        </Link>
      </Grid.Column>
    </div>
  );
}
