import { Container, Title } from 'bloomer';
import * as React from 'react';

const Main = props => (
  <Container hasTextAlign="centered">
    <Title>{props.match.params.url}</Title>
  </Container>
);

export default Main;
