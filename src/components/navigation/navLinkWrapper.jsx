import { MenuLink } from 'bloomer';
import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { action as toggleMenu } from 'redux-burger-menu';
import PropTypes from 'prop-types';

// Button displayed and rendered as active
export const NavLinkButton = props => (
  <li>
    <MenuLink
      onClick={props.onLink}
      isActive={props.location === props.link}
      hasTextColor={props.location === props.link ? 'white' : 'grey'}
    >
      {props.name}
    </MenuLink>
  </li>
);

NavLinkButton.propTypes = {
  name: PropTypes.string.isRequired,
  onLink: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

// map redux state to props of NavLinkButton
const mapStateToProps = state => ({
  // url
  location: state.routerReducer.location.pathname,
});

// map dispatch actions to props of NavLinkButton
const mapDispatchToProps = (dispatch, ownProps) => ({
  // closing and opening sidemenu and navigating
  onLink: (event) => {
    event.preventDefault();
    dispatch(toggleMenu(true));
    dispatch(toggleMenu(false));
    dispatch(push(ownProps.link));
  },
});

// creating higher order component
const NavLinkWrapper = connect(mapStateToProps, mapDispatchToProps)(NavLinkButton);
export default NavLinkWrapper;
