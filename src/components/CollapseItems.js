import React, { useState } from "react";
import { Row, Col, Collapse } from "reactstrap";
import styled from "styled-components";
import FlipCard from "./FlipCard";

const CollapseTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.p`
  font-size: 2rem;
  font-weight: 500;
`;

function CollapseItems({ items, title, open = false }) {
  const [isOpen, setIsOpen] = useState(open);
  return (
    <>
      <CollapseTitle
        className="titulo"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <h3 className="text-center">{title}</h3>
        <Icon>{isOpen ? "-" : "+"}</Icon>
      </CollapseTitle>
      <Row xs="1" md="2" lg="2" xl="3">
        {items.map((img) => {
          return (
            <Collapse isOpen={isOpen}>
              <Col key={img.alt}>
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
