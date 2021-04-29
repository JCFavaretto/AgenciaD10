import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Banner = styled.div`
  min-height: 33vh;
  width: 100;
  background-color: #4b9a37;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 75%;
    color: white;
    text-align: center;
    margin: 0 auto;
    padding: 1rem 0;
  }

  p {
    font-weight: 700;
    padding: 0;
    margin: 0;
  }

  span {
    font-weight: 500;
    padding-bottom: 1rem;
  }
`;

function BannerHome({ icon, title, text }) {
  return (
    <Banner>
      <div>
        <FontAwesomeIcon
          icon={icon}
          style={{ marginBottom: "2rem", fontSize: "3rem", color: "white" }}
        />
        <p>{title}</p>
        <span>{text}</span>
      </div>
    </Banner>
  );
}

export default BannerHome;
