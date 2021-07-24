import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Menu, Icon} from "semantic-ui-react";
import "../App.css";

export default function Navi() {
  return (
    <div>
        <Menu size="big" className= "nMenu" inverted>
          <Container>
            <Menu.Item name="Ana Sayfa" as={Link} to={"/"}>
              <Icon name="home" color="teal"/>
              Ana Sayfa
            </Menu.Item>
            <Menu.Item name="HRMS Personel" as={Link} to={"/adminpanel"}>
              <Icon name="user" color="teal"/>
              Personel
            </Menu.Item>
             {/* <FavouriteSummary/>  */}
            
            {/* <Button
              primary
              as={Link}
              to={"/jobAdCreate"}
              position="right"
              style={{ margin: "0.5em" }}
              basic
              inverted
              color="teal"
            >
              İlan Ekle
            </Button> */}
            <Menu.Menu position="right" style={{ margin: "0.5em" }}>
              <Button.Group>
                <Button as={Link} to={"/login"} basic inverted color="red">
                  Giriş yap
                </Button>
                <Button
                  positive
                  as={Link}
                  to={"/register"}
                  basic
                  inverted
                  color="red">
                  Kaydol
                </Button>
              </Button.Group>
            </Menu.Menu>
          </Container>
        </Menu>
    </div>
  );
}
