import { Box, Column, Columns, Container, Title } from 'bloomer';
import * as React from 'react';

import LoginForm from '../forms/loginForm';

const Main = () => (
  <Container hasTextAlign="centered">
    <Columns isCentered>
      <Column isSize="1/2">
        <Box hasTextAlign="left">
          <Title hasTextColor="primary">Login</Title>
          <LoginForm onSubmit={values => (true)} />
        </Box>
      </Column>
    </Columns>
  </Container>
);

export default Main;
