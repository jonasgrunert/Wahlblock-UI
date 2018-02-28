import { MenuLink } from "bloomer";
import * as React from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { push, RouterState } from "react-router-redux";
import { Dispatch } from "redux";
import {action as toggleMenu, IStateReduxBurgerMenu} from "redux-burger-menu";

import { IStore } from "../../index";

interface IOwnProps {
  link: string;
  name: string;
}

interface IStateProps {
  location: Location;
}

interface IDispatchProps {
  onLink: () => any;
}

interface IProps {
  link: string;
  name: string;
  onLink: () => any;
  // location: RouterState;
}

const NavLinkButton = (props: IOwnProps & IDispatchProps) =>
  <li>
    <MenuLink onClick={props.onLink}>
        {props.name}
    </MenuLink>
  </li>;

const mapStateToProps = (state: IStore) => ({
  location: state.router,
});

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: IOwnProps) => ({
  onLink: () => {
    dispatch(toggleMenu(false));
    dispatch(push(ownProps.link));
  },
});


export const NavLinkWrapper = connect(
    null,
    mapDispatchToProps,
  )(NavLinkButton);

// export default withRouter(NavLinkWrapper);
