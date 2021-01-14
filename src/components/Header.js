import React, { useState } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  Collapse,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import logo from "assets/logo.png";
import logo2 from "assets/jyg.png";

const InnerHeader = styled(Navbar)`
  background-color: #607d8b00;
  transition: 0.3s all ease-in;
  justify-content: space-between;
  padding: 0.3rem 1rem;

  ${(props) =>
    props.primary === "true" &&
    css`
      background-color: #4b9a37f0;
    `}

  @media (min-width: 768px) {
    height: 100px;
  }
`;

const Navigation = styled(Nav)`
  flex-direction: initial;
  justify-content: space-evenly;
  align-items: center;
  margin: 0;
  flex-grow: 3;
  text-align: center;
  font-weight: 700;
  padding: 1rem 0;
`;

const Link = styled(NavLink)`
  color: var(--white);
  padding: 1rem 0 0 0;
  text-align: center;
  font-size: 1rem;

  &:hover {
    color: var(--dark);
  }
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <InnerHeader
      primary={navbar || isOpen ? "true" : undefined}
      dark
      expand="md"
      fixed="top"
    >
      <Link to="/" onClick={() => setIsOpen(false)}>
        <NavbarBrand>
          <div className="logo">
            <img src={logo} alt="D10" height="100px" />
            <span>Asociación Civil</span>
          </div>
        </NavbarBrand>
      </Link>
      <NavbarToggler onClick={toggle} />

      <Collapse isOpen={isOpen} navbar>
        <Navigation navbar tabs>
          <NavItem>
            <Link
              onClick={() => setIsOpen(false)}
              to="/nosotros"
              activeStyle={{ borderTop: "2px solid var(--white)" }}
            >
              Nosotros
            </Link>
          </NavItem>
          <NavItem>
            <Link
              onClick={() => setIsOpen(false)}
              to="/jugadores"
              activeStyle={{ borderTop: "2px solid var(--white)" }}
            >
              Jugadores
            </Link>
          </NavItem>
          <NavItem>
            <Link
              onClick={() => setIsOpen(false)}
              to="/centros"
              activeStyle={{ borderTop: "2px solid var(--white)" }}
            >
              Centros{" "}
            </Link>
          </NavItem>
          <NavItem>
            <Link
              onClick={() => setIsOpen(false)}
              to="/jyg"
              activeStyle={{ borderTop: "2px solid var(--white)" }}
            >
              <img src={logo2} alt="JyG" width="70px" />{" "}
            </Link>
          </NavItem>
        </Navigation>
      </Collapse>
    </InnerHeader>
  );
}

export default Header;
