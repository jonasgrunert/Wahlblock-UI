import { MenuLink } from 'bloomer';
import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { action as toggleMenu } from 'redux-burger-menu';
import PropTypes from 'prop-types';

const NavLinkButton = props => (
  <li>
    <MenuLink onClick={props.onLink} isActive={props.location === props.link} hasTextColor={props.location === props.link ? 'white' : 'grey'} >
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

const mapStateToProps = state => ({
  location: state.routerReducer.location.pathname,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onLink: (event) => {
    event.preventDefault();
    dispatch(toggleMenu(true));
    dispatch(toggleMenu(false));
    dispatch(push(ownProps.link));
  },
});


const NavLinkWrapper = connect(mapStateToProps, mapDispatchToProps)(NavLinkButton);
export default NavLinkWrapper;
