import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

/* Backgrounds */
import centros from "assets/fondos/1.jpeg";
import jyg from "assets/fondos/2.jpeg";
import jugadores from "assets/fondos/3.jfif";
import home from "assets/fondos/4.jpeg";
import nosotros from "assets/fondos/5.jpeg";

/* Basic Layout*/
import Header from "components/Header";
import Footer from "components/Footer";

/* Pages */
import Home from "pages/Home";
import Nosotros from "pages/Nosotros";
import Jugadores from "pages/Jugadores";
import Centros from "pages/Centros";
import JugadasyGoles from "pages/JugadasyGoles";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/JyG">
            <JugadasyGoles fondo={jyg} />
          </Route>
          <Route exact path="/centros">
            <Centros fondo={centros} />
          </Route>
          <Route exact path="/jugadores">
            <Jugadores fondo={jugadores} />
          </Route>
          <Route exact path="/nosotros">
            <Nosotros fondo={nosotros} />
          </Route>
          <Route exact path="/">
            <Home fondo={home} />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
