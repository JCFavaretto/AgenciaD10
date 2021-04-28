import React from "react";
import styled, { css } from "styled-components";

import logoSm from "assets/logo-sm.png";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  margin-left: 2rem;

  img {
    transition: 0.3s all ease-in;
  }

  div {
    color: black;
    font-weight: 700;
    font-size: 0.5rem;
    transition: 0.3s all ease-in;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 0.2rem;
    padding-top: 1rem;

    span {
      ${(props) =>
        props.primary === "true" &&
        css`
          color: #4b9a37ff;
        `};
    }
  }
`;

function Logo({ navbar = true }) {
  return (
    <LogoContainer primary={navbar ? "true" : undefined}>
      <img src={logoSm} alt="D10" height="40px" />
      <div>
        <span style={{ fontSize: "0.6rem" }}>dediez</span>
        <span>Integración Deportiva</span>
      </div>
    </LogoContainer>
  );
}

export default Logo;
