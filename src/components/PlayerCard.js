import React from "react";
import {
  Card as ReactCard,
  CardBody,
  CardFooter,
  CardImg,
  CardLink,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import styled from "styled-components";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = styled(ReactCard)`
  border-color: #4b9a37ff;
  margin-bottom: 1rem;
  padding: 0;
  text-align: center;
  min-height: 500px;
  width: 100%;
  perspective: 1000px;
  background-color: transparent;

  &:hover,
  &:focus {
    .flip-card-player-inner {
      transform: rotateY(180deg);
    }
  }

  img {
    height: 300px;
    object-fit: contain;
    margin-bottom: 0.3rem;
  }

  .flip-card-player-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;

    .flip-card-player-front,
    .flip-card-player-back {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      -webkit-backface-visibility: hidden;
      /* Safari */
      backface-visibility: hidden;
    }

    .flip-card-player-back {
      background-color: #4b9a37ff;
      color: black !important;
      transform: rotateY(180deg);
      min-height: 498px;
      padding: 0;
    }
  }
`;

function PlayerCard({ player, clubs }) {
  return (
    <Card className="flip-card-player">
      <div className="flip-card-player-inner">
        <CardBody className="flip-card-player-front">
          <CardImg top width="100%" src={player.img} alt="Card image cap" />
          <CardTitle>
            {player.names} {player.lastnames}
          </CardTitle>
          <CardSubtitle>{player.position}</CardSubtitle>
          <CardText>
            <ul>
              <li>
                {player.height}m. - {player.weight}Kg.
              </li>
              <li>{player.birthday}</li>
              <li>{player.nacionality}</li>
            </ul>
          </CardText>
        </CardBody>

        <CardBody className="flip-card-player-back">
          <CardTitle
            style={{
              fontWeight: "700",
              color: "white",
              padding: "0",
              margin: "0",
              fontSize: "1.2rem",
            }}
          >
            Clubes de Participación
          </CardTitle>
          <CardText style={{ flexGrow: "1" }}>
            <ul>
              {clubs.map(({ year, club }, i) => {
                return (
                  <li key={i}>
                    <p
                      style={{
                        fontWeight: "700",
                        color: "white",
                        padding: "0",
                        margin: "0",
                      }}
                    >
                      {year}
                    </p>
                    <ul>
                      {club.map((a) => (
                        <li>{a}</li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </CardText>
          <CardFooter
            style={{ position: "absolute", bottom: "0", left: "0", right: "0" }}
          >
            <CardLink href="#">
              <FontAwesomeIcon
                style={{ color: "white", fontSize: "1.5rem" }}
                icon={faYoutube}
              />
            </CardLink>
          </CardFooter>
        </CardBody>
      </div>
    </Card>
  );
}

export default PlayerCard;
