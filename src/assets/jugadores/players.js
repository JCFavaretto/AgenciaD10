import alejo from "assets/jugadores/alejo.jfif";
import tomas from "assets/jugadores/tomas.jfif";

export const players = [
  {
    names: "Alejo Lautaro",
    lastnames: "Martinez Avellaneda",
    img: alejo,
    birthday: "20/12/2000",
    nacionality: "Argentino",
    height: 1.69,
    weight: 65,
    position: "Delantero",
    clubs: [
      {
        year: 2016,
        club: [
          "Infantiles de AFA: Futsal. Pacifico y Allende",
          "Novena División: Clud Comunicaciones Liga A",
        ],
      },
      {
        year: 2017,
        club: [
          "Octava División: Club de Comunicaciones Liga A",
          "Séptima División: Futsal Lamadrid AFA",
          "Séptima División: Club Allende BAFI",
        ],
      },
      {
        year: 2018,
        club: [
          "Sexta División: Club Excursionistas",
          "Quinta División: Club Excursionistas",
        ],
      },
      { year: 2019, club: ["Cuarta División: Club La Catedral"] },
      { year: 2020, club: ["Reserva: Club La Catedral"] },
    ],
  },
  {
    names: "Tomás Iván",
    lastnames: "Martinez Avellaneda",
    img: tomas,
    birthday: "9/05/2002",
    nacionality: "Argentino",
    height: 1.69,
    weight: 65,
    position: "Ala Izquierda",
    clubs: [
      {
        year: 2016,
        club: [
          "Infantiles de AFA: Club Comunicaciones",
          "Novena División: Club Comunicaiones AFA",
        ],
      },
      {
        year: 2017,
        club: ["Octava División: Club Ferrocarril Oeste Liga A"],
      },
      { year: 2018, club: ["Séptima División: Club San Telmo AFA"] },
      { year: 2019, club: ["Sexta División: Club San Telmo AFA"] },
      { year: 2020, club: ["Quinta División: Club San Telmo AFA"] },
    ],
  },
];
