import { Box, Column, Columns, Container, Notification, Title } from 'bloomer';
import * as React from 'react';
import PropTypes from 'prop-types';

import LoginFormContainer from '../../forms/hoc/loginForm';

export class Main extends React.Component {
  componentDidMount() {
    this.props.redirect();
  }

  componentDidUpdate() {
    this.props.redirect();
  }

  render() {
    return (
      <Container hasTextAlign="centered">
        <Columns isCentered>
          <Column isSize="1/2">
            <Box hasTextAlign="left">
              <Title hasTextColor="primary">Login</Title>
              <Notification isColor="danger">
                Once logged in on one device you have to complete the vote process.
              </Notification>
              <LoginFormContainer />
            </Box>
          </Column>
        </Columns>
      </Container>
    );
  }
}

Main.propTypes = {
  redirect: PropTypes.func.isRequired,
};
