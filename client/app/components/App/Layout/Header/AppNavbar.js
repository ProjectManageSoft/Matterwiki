import React from "react";

import { Link } from "react-router";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import SearchForm from "./SearchForm";

const LinkNavItem = props => (
  <LinkContainer to={props.to}>
    <NavItem> {props.children} </NavItem>
  </LinkContainer>
);

const AppNavbar = props => {
  const { isAdmin, handleLogoutClick } = props;

  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="home" className="navbar-brand">
            <img src="../../assets/logo.png" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <SearchForm />
        <Nav pullRight>
          {isAdmin &&
            <LinkNavItem to="admin">
              Admin
            </LinkNavItem>}
          <LinkNavItem to="article/new">
            New Article
          </LinkNavItem>
          <NavItem onClick={handleLogoutClick}> Logout </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
