import { Icon, Menu, MenuList, Title } from 'bloomer';
import * as React from 'react';
import { push as SideBar } from 'react-burger-menu';
import { decorator as reduxBurgerMenu } from 'redux-burger-menu';

import burgerMenuStyles from '../../config/burgerMenuStyles';
import menuLinks from '../../config/menuLink';
import NavLinkWrapper from './navLinkWrapper';

const Links = menuLinks.map(link => (
  <NavLinkWrapper link={link.link} name={link.name} />
));

const AdminMenu = () => (
  <Menu>
    <MenuList>
      { Links }
    </MenuList>
  </Menu>
);


const SideMenu = () => (
  <SideBar
    isOpen={false}
    pageWrapId="main"
    outerContainerId="outer-container"
    styles={burgerMenuStyles}
    customBurgerIcon={
      <div>
        <Icon isDisplay="inline" isSize="medium" className="fa fa-bars fa-2x" />
        <Title isDisplay="inline" isSize={3}>&nbsp;Wahlblock</Title>
      </div>
    }
  >
    <AdminMenu />
  </SideBar>
);

const MainMenu = reduxBurgerMenu(SideMenu);
export default MainMenu;
