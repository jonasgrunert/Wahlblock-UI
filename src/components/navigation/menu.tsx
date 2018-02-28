import { Icon, Image, Menu, MenuLink, MenuList, Subtitle, Title } from "bloomer";
import * as React from "react";
import { push as SideBar } from "react-burger-menu";
import {decorator as reduxBurgerMenu} from "redux-burger-menu";

import { burgerMenuStyles } from "../../config/burgerMenuStyles";
import { menuLinks } from "../../config/menuLink";
import { NavLinkWrapper } from "./navLinkWrapper";

const Links = menuLinks.map((link) => {
  return (
    <NavLinkWrapper link={link.link} name={link.name} />
  );
});

const AdminMenu = () =>
  <Menu>
    <MenuList>
      { Links }
    </MenuList>
  </Menu>;


export const SideMenu = () =>
  <SideBar
    pageWrapId={"main"}
    outerContainerId={"outer-container"}
    styles={burgerMenuStyles}
    customBurgerIcon={
      <div>
        <Icon isDisplay="inline" isSize="medium" className="fa fa-bars fa-2x" />
        <Title isDisplay="inline" isSize={3}>&nbsp;Wahlblock</Title>
      </div>
    }
  >
    <AdminMenu />
  </SideBar>;

export default reduxBurgerMenu(SideMenu);
