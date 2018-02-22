import { Column, Columns, Container, Navbar, NavbarItem } from "bloomer";
import * as React from "react";
import { AdminMenu } from "./navigation/menu";

export interface IPanelProps { name: string; }

export const AdministrationPanel = (props: IPanelProps) =>
  <div>
  <Navbar style={{ borderBottom: "solid 1px #00D1B2", backgroundColor: "#00D1B2", color: "#FFFFFF", margin: "0" }} >
    <NavbarItem>{props.name}</NavbarItem>
  </Navbar>
  <Container isFluid={true}>
    <Columns>
      <Column isSize="1/4">
        <AdminMenu />
      </Column>
      <Column isSize="3/4">
      </Column>
    </Columns>
  </Container>
  </div>;
