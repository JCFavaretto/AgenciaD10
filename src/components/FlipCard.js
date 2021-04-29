import React from "react";
import styled from "styled-components";

const Flip = styled.div`
  background-color: transparent;
  width: 100%;
  height: 250px;
  margin: 0.5rem auto;
  perspective: 1000px;

  img {
    height: 200px;
    object-fit: contain;
  }

  &:hover {
    .flip-card-inner {
      transform: rotateY(180deg);
    }
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;

    .flip-card-front,
    .flip-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      /* Safari */
      backface-visibility: hidden;
    }

    .flip-card-back {
      background-color: #4b9a37ff;
      color: white;
      padding-top: 2rem;
      border: 2px solid white;
      transform: rotateY(180deg);
      height: 200px;
    }
  }
`;

export default function FlipCard({ img }) {
  return (
    <Flip>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={img.src}
            alt={img.alt}
            style={{ width: "100%", objectFit: "contain" }}
          />
        </div>
        <div className="flip-card-back">
          <h4>{img.name} </h4>
          <p>Dirección: {img.direccion} </p>
          <p>Horarios: {img.horarios} </p>
          <p>Telefono: ########</p>
        </div>
      </div>
    </Flip>
  );
}
