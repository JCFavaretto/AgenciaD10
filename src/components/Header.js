import React, { useState } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  Collapse,
  Container,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import logo from "assets/logo.png";
import logo2 from "assets/jyg.png";
import NavMenu from "components/NavMenu";

const InnerHeader = styled(Navbar)`
  background-color: #607d8b00;
  transition: 0.5s all ease-in;
  justify-content: space-between;
  padding: 0 1rem;
  max-height: 100px;

  ${(props) =>
    props.primary === "true" &&
    css`
      max-height: 50px;
      background-color: #4b9a37ff;
      transition: 0.3s all ease-out;
    `};
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

  @media (max-width: 767px) {
    display: none;
  }
`;

const Link = styled(NavLink)`
  color: var(--white);
  padding: 0 0 0.6rem 0;
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
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <InnerHeader
      primary={navbar ? "true" : undefined}
      dark
      expand="md"
      fixed="top"
    >
      <Container>
        <Link to="/" style={{ padding: "0" }} onClick={() => setIsOpen(false)}>
          <NavbarBrand style={{ padding: "0" }}>
            <div className="logo">
              <img src={logo} alt="D10" height={navbar ? "50px" : "100px"} />
              <span className={navbar ? "small" : ""}>Asociación Civil</span>
            </div>
          </NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          <Navigation navbar>
            <NavItem>
              <Link
                onClick={() => setIsOpen(false)}
                to="/nosotros"
                activeStyle={{ borderBottom: "2px solid var(--white)" }}
              >
                Nosotros
              </Link>
            </NavItem>
            <NavItem>
              <Link
                onClick={() => setIsOpen(false)}
                to="/jugadores"
                activeStyle={{ borderBottom: "2px solid var(--white)" }}
              >
                Jugadores
              </Link>
            </NavItem>
            <NavItem>
              <Link
                onClick={() => setIsOpen(false)}
                to="/centros"
                activeStyle={{ borderBottom: "2px solid var(--white)" }}
              >
                Centros de Entrenamiento{" "}
              </Link>
            </NavItem>
            <NavItem>
              <Link
                onClick={() => setIsOpen(false)}
                to="/jyg"
                activeStyle={{ borderBottom: "2px solid var(--white)" }}
                style={{ paddingTop: "1rem" }}
              >
                <img src={logo2} alt="JyG" width="70px" />{" "}
              </Link>
            </NavItem>
          </Navigation>
        </Collapse>
        <NavMenu
          logo={logo}
          logo2={logo2}
          active={isOpen ? "true" : undefined}
          toggle={toggle}
        />
      </Container>
    </InnerHeader>
  );
}

export default Header;
