import React from "react";
import {
  Container,
  Grid,
  GridColumn,
  GridRow,
  Header,
  Icon,
  List,
  Segment,
} from "semantic-ui-react";

export default function Footer() {
  return (
    <div className="footer">
      <Segment inverted vertical style={{ padding: "3em 0em" }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Hakkımızda" />
                <List link inverted>
                  <Icon name="phone" color="teal" />
                  <List.Item as="a">İletisim</List.Item>
                  <Icon name="address book" color="teal" />
                  <List.Item as="a">Rehber</List.Item>
                  <Icon name="question circle" color="teal" />
                  <List.Item as="a">Yardım</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Hizmetlerimiz" />
                <List link inverted>
                  <Icon name="arrow circle down" color="teal" />
                  <List.Item as="a">İlan Satın Al</List.Item>
                  <Icon name="arrow circle down" color="teal" />
                  <List.Item as="a">Çalışmalarımız</List.Item>
                  <Icon name="arrow circle down" color="teal" />
                  <List.Item as="a">Hakkımızda</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <div className="descriptionPosition">
                  <Header as="h2">
                    <Header.Content>
                      <font color="white">
                        <Icon name="hand point right" color="teal" />
                        Human Resource Management System <br />
                      </font>
                      <br />
                      <Icon name="github" color="teal" />
                      <a href="https://www.github.com/yusufenesaras">
                        {" "}
                        Github
                      </a>{" "}
                      <br />
                      <Icon name="linkedin" color="teal" />
                      <a href="https://www.linkedin.com/in/yusuf-enes-aras-b155681a7/">
                        LinkedIn{" "}
                      </a>{" "}
                      <br />
                      <Icon name="twitter" color="teal" />
                      <a href="https://twitter.com/y_enesaras"> Twitter </a>
                      <Header.Subheader>
                        <font color="white"></font>
                      </Header.Subheader>
                    </Header.Content>
                  </Header>
                </div>
              </Grid.Column>

              <GridColumn>
                <Header as="h2">
                  <Icon name="settings" color="teal" />
                  <Header.Content>
                    <font color="white">
                      {" "}
                      Account Settings
                      <GridRow>Manage your preferences</GridRow>
                    </font>
                  </Header.Content>
                </Header>
              </GridColumn>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
}
