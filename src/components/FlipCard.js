import React from "react";

function FlipCard({ img }) {
  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img
            src={img.src}
            alt={img.alt}
            style={{ width: "100%", objectFit: "contain" }}
          />
        </div>
        <div class="flip-card-back">
          <h4>{img.name} </h4>
          <p>Dirección: {img.direccion} </p>
          <p>Horarios: {img.horarios} </p>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
