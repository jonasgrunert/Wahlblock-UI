import { Container, Title } from "bloomer";
import * as React from "react";
import { RouteComponentProps } from "react-router";

interface IMatchParams {
  url: string;
}

interface IMatchProps extends RouteComponentProps<IMatchParams> {
}

export const Main = (props: IMatchProps) => (
  <Container hasTextAlign="centered">
    <Title>{props.match.params.url}</Title>
  </Container>
);
