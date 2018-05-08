import * as React from 'react';
import { Links, SubMenus, AdminMenu, SideMenu } from '../src/components/navigation/menu';
import { NavLinkButton } from '../src/components/navigation/navLinkWrapper';

const menuConfig = [
  {
    exact: true,
    link: '/home',
    name: 'Home',
  },
  {
    exact: false,
    link: '/default',
    name: 'Home',
  },
];

const menusConfig = [
  {
    title: 'default',
    id: 0,
    base: 'default',
    links: menuConfig,
  },
];

const base = 'local';

const button = 'navigation';

describe('rendering navigation', () => {
  it('render navigationlink active', () => {
    const navlink = shallow(<NavLinkButton name={button} onLink={jest.fn()} location={button} link={button} />);
    expect(navlink).toMatchSnapshot();
  });
  it('render navigationlink active', () => {
    const navlink = shallow(<NavLinkButton name={button} onLink={jest.fn()} location="button" link={button} />);
    expect(navlink).toMatchSnapshot();
  });
  it('render links', () => {
    const links = Links(menuConfig, base);
    expect(links).toMatchSnapshot();
  });
  it('render submenus', () => {
    const submenus = SubMenus(menusConfig);
    expect(submenus).toMatchSnapshot();
  });
  it('render adminmenu', () => {
    const adminmenu = shallow(<AdminMenu routesConfig={menusConfig} />);
    expect(adminmenu).toMatchSnapshot();
  });
  it('render sidemenu', () => {
    const sidemenu = shallow(<SideMenu routesConfig={menusConfig} title={base} />);
    expect(sidemenu).toMatchSnapshot();
  });
});
