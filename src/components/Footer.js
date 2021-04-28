import React from "react";
import styled from "styled-components";
import facebook from "assets/facebook.svg";
import instagram from "assets/instagram.svg";
import whatsapp from "assets/whatsapp.svg";

const InnerFooter = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  color: var(--light);
  background-color: rgba(0, 0, 0, 0.4);

  .footer__sociales {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media (max-width: 700px) {
      flex-direction: column;
    }
  }

  .footer__iconos {
    display: flex;
    justify-content: space-around;
    padding-bottom: 1rem;
    width: 10rem;
    margin: 0 0 0 1rem;
  }

  .footer__copy {
    text-align: center;
    font-size: 0.5rem;
    padding: 0;
    margin-top: 1rem;
  }
`;

function Footer() {
  return (
    <InnerFooter>
      <div>
        <div className="footer__sociales">
          <p>
            Seguinos o contactate por cualquiera de nuestras redes sociales!
          </p>
          <div className="footer__iconos">
            <a
              href="https://www.facebook.com/DeDiezIntegracionDeportiva"
              rel="noreferrer"
              target="_blank"
              style={{
                color: "var(--light)",
              }}
            >
              <img src={facebook} width="35px" alt="F" />
            </a>
            <a
              href="https://www.instagram.com/dediez.id"
              rel="noreferrer"
              target="_blank"
              style={{
                color: "var(--light)",
              }}
            >
              <img src={instagram} width="35px" alt="F" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5491132970849&text=Buenas! Quisiera conocer mas sobre los servicios que ofreces"
              rel="noreferrer"
              target="_blank"
              style={{
                padding: "0",
                margin: "0",
              }}
            >
              <img src={whatsapp} width="35px" alt="F" />
            </a>
          </div>
        </div>
        <p className="footer__copy">
          D10 Asociación Civil- {new Date().getFullYear()}. Todos los derechos
          reservados.
        </p>
      </div>
    </InnerFooter>
  );
}

export default Footer;
