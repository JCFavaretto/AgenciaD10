import React from "react";
import styled from "styled-components";

const InnerFooter = styled.section`
  display: flex;
  justify-content: center;
  background-color: var(--dark);
  padding: 1rem;
  color: var(--light);
`;

function Footer() {
  return (
    <InnerFooter>
      <p className="text-left">
        Copyright D10 - {new Date().getFullYear()}. Todos los derechos
        reservados.
      </p>
    </InnerFooter>
  );
}

export default Footer;
