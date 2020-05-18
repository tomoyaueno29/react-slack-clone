import React from 'react';
import { Grid, Form, Segment, Button, Header, Icon } from 'semantic-ui-react';


class Register extends React.Component {


  handleChange = () => {

  }

  render() {
    return (
      <Grid textAlign='center' verticalAlign='middle'>
        <Grid.Column style={{ maxwidth: 450 }}>
          <Header as="h2" icon color="orange" textAlign="center">
            <Icon name="puzzle piece" color="orange" />
            Register for DevChat
          </Header>

          <Form size="large">
            <Segment stacked>
              <Form.Input fluid name="username" icon="user" iconPosition='left'
              placeholder="Username" onChange={this.handleChange} type="text">
              </Form.Input>

              <Form.Input fluid name="email" icon="mail" iconPosition='left'
              placeholder="Email Address" onChange={this.handleChange} type="text">
              </Form.Input>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Register;