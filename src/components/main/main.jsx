import { Box, Column, Columns, Container, Notification, Title } from 'bloomer';
import * as React from 'react';

import LoginFormContainer from '../forms/loginForm';

const Main = () => (
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

export default Main;
