import { Container, Icon, Menu, MenuLabel, MenuList, Title } from 'bloomer';
import PropTypes from 'prop-types';
import * as React from 'react';
import { push as SideBar } from 'react-burger-menu';
import { decorator as reduxBurgerMenu } from 'redux-burger-menu';

import burgerMenuStyles from '../../config/burgerMenuStyles';
import NavLinkWrapper from './navLinkWrapper';

// building button component
export const Links = (menuConfig, base) =>
  menuConfig.map(link => (
    <NavLinkWrapper link={`/${base}/${link.link}`} name={link.name} key={link.link} />
  ));

// building sidemenu for subcategories
export const SubMenus = menuConfig =>
  menuConfig.map(subMenu => (
    <Container key={subMenu.title} isFluid style={{ margin: '1em' }}>
      <MenuLabel>{subMenu.title}</MenuLabel>
      <MenuList>{Links(subMenu.links, subMenu.base)}</MenuList>
    </Container>
  ));

// building complete sidemenu
export const AdminMenu = props => (
  <Menu>
    <MenuList>{SubMenus(props.routesConfig)}</MenuList>
  </Menu>
);

AdminMenu.propTypes = {
  routesConfig: PropTypes.arrayOf(PropTypes.shape({
    exact: PropTypes.bool,
    link: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
};

// sidemenu component for burgermenu
export const SideMenu = props => (
  <SideBar
    isOpen={false}
    pageWrapId="main"
    outerContainerId="outer-container"
    styles={burgerMenuStyles}
    customBurgerIcon={
      <div>
        <Icon isDisplay="inline" isSize="medium" className="fa fa-bars fa-2x" />
        <Title isDisplay="inline" isSize={3}>
          &nbsp;{props.title}
        </Title>
      </div>
    }
  >
    <AdminMenu routesConfig={props.routesConfig} />
  </SideBar>
);

SideMenu.propTypes = {
  routesConfig: PropTypes.arrayOf(PropTypes.shape({
    exact: PropTypes.bool,
    link: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  title: PropTypes.string.isRequired,
};

// higher order sidemenu component
const MainMenu = reduxBurgerMenu(SideMenu);
export default MainMenu;
