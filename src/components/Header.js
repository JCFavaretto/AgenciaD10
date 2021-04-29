import React, { useEffect, useState } from "react";
import { Nav, Navbar, NavItem, Collapse, Container } from "reactstrap";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import logo2 from "assets/jyg.png";
import NavMenu from "components/NavMenu";
import Logo from "components/Logo";

const InnerHeader = styled(Navbar)`
  background-color: #607d8b00;
  transition: 0.5s all ease-in;
  justify-content: space-between;
  transition: 0.3s all ease-out;
  padding: 1rem 3rem 1rem 2rem;
  max-height: 100px;

  ${(props) =>
    props.styled === "primary"
      ? css`
          max-height: 50px;
          padding: 0 3rem 0 2rem;
          background-color: white; /*#4b9a37ff;*/
          transition: 0.3s all ease-out;
        `
      : props.styled === "secondary" &&
        css`
          max-height: 50px;
          padding: 0 3rem 0 2rem;
          background-color: #4b9a37ff;
          transition: 0.3s all ease-out;
        `}
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

  @media (max-width: 998px) {
    display: none;
  }
`;

const Link = styled(NavLink)`
  color: var(--white);
  padding: 0 0 0.6rem 0;
  text-align: center;
  font-size: 1rem;
  transition: 0.3s all ease-out;

  &:hover {
    color: var(--dark);
  }

  ${(props) =>
    props.styled === "primary" &&
    css`
      color: #4b9a37ff;
    `}
`;

const Toggler = styled.div`
  font-size: 1.5rem;
  color: white;
  margin-right: 1rem;

  &:hover {
    cursor: pointer;
  }

  ${(props) =>
    props.styled === "primary"
      ? css`
          color: #4b9a37ff;
        `
      : props.styled === "secondary"
      ? css`
          color: white;
        `
      : ""}

  @media (min-width: 991px) {
    display: none;
  }
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState("default");
  const toggle = () => setIsOpen(!isOpen);

  function changeBackground() {
    if (window.scrollY >= 50 && window.scrollY < 1000) {
      setNavbar("primary");
      console.log("hola");
    } else if (window.scrollY >= 1000) {
      console.log("hola2");
      setNavbar("secondary");
    } else {
      setNavbar("default");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <InnerHeader styled={navbar} dark expand="lg" fixed="top">
      <Container fluid="md">
        <Link to="/" style={{ padding: "0" }} onClick={() => setIsOpen(false)}>
          <Logo navbar={navbar} />
        </Link>
        <Toggler onClick={toggle} styled={navbar}>
          <FontAwesomeIcon icon={faBars} />
        </Toggler>
        <Collapse isOpen={isOpen} navbar>
          <Navigation navbar>
            <NavItem>
              <Link
                onClick={() => setIsOpen(false)}
                to="/nosotros"
                activeStyle={{ borderBottom: "2px solid var(--white)" }}
                styled={navbar}
              >
                Nosotros
              </Link>
            </NavItem>
            <NavItem>
              <Link
                onClick={() => setIsOpen(false)}
                to="/jugadores"
                activeStyle={{ borderBottom: "2px solid var(--white)" }}
                styled={navbar}
              >
                Jugadores
              </Link>
            </NavItem>
            <NavItem>
              <Link
                onClick={() => setIsOpen(false)}
                to="/centros"
                activeStyle={{ borderBottom: "2px solid var(--white)" }}
                styled={navbar}
              >
                Centros de Entrenamiento
              </Link>
            </NavItem>
            <NavItem>
              <Link
                onClick={() => setIsOpen(false)}
                to="/cursos"
                activeStyle={{ borderBottom: "2px solid var(--white)" }}
                styled={navbar}
              >
                Cursos
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
          logo2={logo2}
          active={isOpen ? "true" : undefined}
          toggle={toggle}
        />
      </Container>
    </InnerHeader>
  );
}

export default Header;
