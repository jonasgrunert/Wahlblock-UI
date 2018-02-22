import { Menu, MenuLabel, MenuLink, MenuList } from "bloomer";
import * as React from "react";
import { Link } from "react-router-dom";

export const AdminMenu = () =>
  <Menu>
    <MenuLabel>Elections</MenuLabel>
    <MenuList>
      <li><MenuLink><Link to="/vote/legalize-it">Legalize it!</Link></MenuLink></li>
    </MenuList>
    <MenuLabel>Outcomes</MenuLabel>
    <MenuList>
      <li><MenuLink><Link to="/election/legalize-it">Legalize it!</Link></MenuLink></li>
    </MenuList>
    <MenuLabel>Stats for Nerds</MenuLabel>
      <MenuList>
        <li><MenuLink><Link to="/stats">Stats I</Link></MenuLink></li>
      </MenuList>
  </Menu>;
