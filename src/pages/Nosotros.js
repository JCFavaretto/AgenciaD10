import React from "react";
import styled from "styled-components";
import { Jumbotron } from "reactstrap";

const InnerPage = styled.section`
  min-height: calc(100vh);
  padding: 6rem 0 2rem 0;
`;

function Nosotros() {
  return (
    <InnerPage>
      <Jumbotron>
        <h3 className="titulo text-left">
          ¿Qué es D10 - Integración deportiva?
        </h3>
        <p>
          Es una Asociación civil destinada a la formación, entrenamiento y
          perfeccionamiento deportivo del área Infantil, Juvenil y Libres.
          Contamos con Centros de formación y entrenamientos deportivos ubicados
          estratégicamente a lo largo y ancho del mundo. Tambien ofrecemos
          Deporte Adaptado para personas con discapacidades.
        </p>
        <p className="titulo">Cualés son nuestros Objetivos</p>
        <ul style={{ paddingLeft: "2rem" }}>
          <li style={{ listStyleType: "square" }}>
            Crear Valores:
            <ul style={{ paddingLeft: "1rem" }}>
              <li style={{ listStyleType: "initial" }}>Desde el respeto</li>
              <li style={{ listStyleType: "initial" }}>
                Desde el trabajo en grupo
              </li>
              <li style={{ listStyleType: "initial" }}>Desde la disciplina</li>
              <li style={{ listStyleType: "initial" }}>
                Desde la responsabilidad
              </li>
            </ul>
          </li>
          <li style={{ listStyleType: "square" }}>
            Lograr ser el mayor semillero Humano y Profesional
          </li>
          <li style={{ listStyleType: "square" }}>
            Llegar completos como personas
          </li>
          <li style={{ listStyleType: "square" }}>
            Deportivamente como profesional Plantillas
          </li>
        </ul>
        <p className="titulo">Historia de D10</p>
        <p>
          Inicia en el sueño de un jugador apasionado por el Fútbol, donde su
          objetivo es transmitir valores y esa misma pasión a otros jugadores,
          desde el juego primeramente y luego llevarlo al plano profesional. Por
          esta misma razón se crea D10 integración deportiva, un lugar para
          acompañar a todas las personas a lograr sus objetivos propuestos.
        </p>
        <p className="titulo">Equipo de trabajo</p>
        <ul style={{ paddingLeft: "2rem" }}>
          <li style={{ listStyleType: "square" }}>
            <p>Director: DT. Martínez Olmedo Daniel</p>
          </li>
          <li style={{ listStyleType: "square" }}>
            <p>Coordinación Deportiva: DT. Nicolás Guento</p>
          </li>
          <li style={{ listStyleType: "square" }}>
            <p>Gestión Deportiva y Captación: Profesor Javier Del Ponti</p>
          </li>
        </ul>
      </Jumbotron>
    </InnerPage>
  );
}

export default Nosotros;
