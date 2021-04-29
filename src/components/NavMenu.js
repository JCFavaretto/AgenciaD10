import React from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Logo from "components/Logo";

const InnerNavMenu = styled.div`
  background-color: white;
  width: calc(100vw);
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: -150%;
  transition: 850ms;
  z-index: 1;

  ${(props) =>
    props.active === "true" &&
    css`
      left: 0;
      transition: 350ms;
    `}

  ul {
    display: flex;
    text-align: left;
    flex-direction: column;
    padding: 0;
    align-items: center;

    li {
      margin-top: 1rem;
      a {
        font-weight: 700;
        color: #4b9a37;
      }
    }
  }

  @media (min-width: 991px) {
    left: -150%;
  }
`;

const NavMenu = ({ logo2, active, toggle }) => {
  return (
    <InnerNavMenu active={active} onClick={toggle}>
      <ul>
        <li>
          <NavLink to="/">
            <Logo navbar="primary" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/nosotros"
            activeStyle={{ borderBottom: "2px solid var(--white)" }}
          >
            Sobre Nosotros
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jugadores"
            activeStyle={{ borderBottom: "2px solid var(--white)" }}
          >
            Jugadores
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/centros"
            activeStyle={{ borderBottom: "2px solid var(--white)" }}
          >
            Centros de Entrenamiento{" "}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cursos"
            activeStyle={{ borderBottom: "2px solid var(--white)" }}
          >
            Cursos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jyg"
            activeStyle={{
              paddingBottom: "1rem",
              borderBottom: "2px solid var(--white)",
            }}
          >
            <img src={logo2} alt="JyG" width="70px" />{" "}
          </NavLink>
        </li>
        <li>
          <FontAwesomeIcon
            style={{ marginTop: "2rem", fontSize: "2rem", color: "#4b9a37" }}
            icon={faTimes}
            onClick={toggle}
          />
        </li>
      </ul>
    </InnerNavMenu>
  );
};

export default NavMenu;
