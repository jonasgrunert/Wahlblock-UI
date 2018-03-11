import { Icon, Menu, MenuList, Title } from 'bloomer';
import PropTypes from 'prop-types';
import * as React from 'react';
import { push as SideBar } from 'react-burger-menu';
import { decorator as reduxBurgerMenu } from 'redux-burger-menu';

import burgerMenuStyles from '../../config/burgerMenuStyles';
import NavLinkWrapper from './navLinkWrapper';

const Links = menuConfig => (
  menuConfig.map(link => (<NavLinkWrapper link={link.link} name={link.name} />))
);

const AdminMenu = props => (
  <Menu>
    <MenuList>
      { Links(props.routesConfig) }
    </MenuList>
  </Menu>
);

AdminMenu.propTypes = {
  routesConfig: PropTypes.arrayOf(PropTypes.shape({
    exact: PropTypes.bool,
    link: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
};

const SideMenu = props => (
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
    <AdminMenu routesConfig={props.routesConfig} />
  </SideBar>
);

SideMenu.propTypes = {
  routesConfig: PropTypes.arrayOf(PropTypes.shape({
    exact: PropTypes.bool,
    link: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
};

const MainMenu = reduxBurgerMenu(SideMenu);
export default MainMenu;
