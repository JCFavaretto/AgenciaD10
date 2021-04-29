import React, { useState } from "react";
import { Row, Col, Collapse } from "reactstrap";
import styled from "styled-components";
import FlipCard from "./FlipCard";

const CollapseTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--green);

  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    padding-top: 1rem;
  }
`;

const Icon = styled.p`
  font-size: 2rem;
  font-weight: 500;
  margin: 0;
`;

function CollapseItems({ items, title, open = false }) {
  const [isOpen, setIsOpen] = useState(open);
  return (
    <>
      <CollapseTitle
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <h3>{title}</h3>
        <Icon>{isOpen ? "-" : "+"}</Icon>
      </CollapseTitle>
      <Row xs="1" md="2" lg="2" xl="3">
        {items.map((img) => {
          return (
            <Collapse key={img.alt} isOpen={isOpen}>
              <Col>
                <FlipCard img={img} />
              </Col>
            </Collapse>
          );
        })}
      </Row>
    </>
  );
}

export default CollapseItems;
