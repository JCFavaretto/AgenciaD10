import React from "react";
import { Col, Container, Row } from "reactstrap";
import PlayerCard from "components/PlayerCard";
import { players } from "assets/jugadores/players";

export default function ListPlayerCard({ home = false }) {
  return (
    <Container>
      <Row>
        {players.map((player, i) => {
          return (
            <Col sm="6" lg="4" key={i}>
              <PlayerCard player={player} clubs={player.clubs} />
            </Col>
          );
        })}
        {players.map((player, i) => {
          return (
            <Col sm="6" lg="4" key={i}>
              <PlayerCard player={player} clubs={player.clubs} />
            </Col>
          );
        })}
        {players.map((player, i) => {
          return (
            <Col sm="6" lg="4" key={i}>
              <PlayerCard player={player} clubs={player.clubs} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
