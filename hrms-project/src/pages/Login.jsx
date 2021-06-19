import React from "react";
import { Link } from "react-router-dom";
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
export default function Login() {
  return (
    <div>
      <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <Form>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Email'
            placeholder='Email'
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
          />

          <Button content='Login' primary />
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Button icon='signup' size='big'>
          <Link to={"/register"}>SignUp</Link>
        </Button>
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>
    </div>
  );
}
