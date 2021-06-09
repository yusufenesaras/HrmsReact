import React from "react";
import { Button, Container, Dropdown, Menu,Icon } from "semantic-ui-react";

export default function Navi() {
  return (
    
    <div>
      <Menu inverted fixed size="large">
        <Container>
        <Button inverted color='white' className="unmargin">
        <Icon name="home" color="teal"/>
        Home
      </Button>
      <Button inverted color='white'>
      <Icon name="envelope open" color="teal"/>
        Message
      </Button>
          <Menu.Menu position="right">
           
           

            <Menu.Item>
              <Button.Group>
                <Button primary>Sign Up</Button>
                <Button.Or />
                <Button positive>Sign In</Button>
              </Button.Group>
              <button class="ui google plus button">
                <i class="google plus icon"></i>
                Google+
              </button>
              
            </Menu.Item>
          </Menu.Menu>
       
        </Container>
        {
              <Dropdown item text="Language">
                <Dropdown.Menu>
                  <Dropdown.Item>English</Dropdown.Item>
                  <Dropdown.Item>Russian</Dropdown.Item>
                  <Dropdown.Item>Spanish</Dropdown.Item>
                  <Dropdown.Item>French</Dropdown.Item>
                  <Dropdown.Item>German</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            }
      </Menu>
    </div>
  );
}
