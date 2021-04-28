import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

/* Basic Layout*/
import Header from "components/Header";
import Footer from "components/Footer";

/* Pages */
import Home from "pages/Home";
import Nosotros from "pages/Nosotros";
import Jugadores from "pages/Jugadores";
import Centros from "pages/Centros";
import JugadasyGoles from "pages/JugadasyGoles";
import Cursos from "pages/Cursos";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/JyG">
            <JugadasyGoles />
          </Route>
          <Route exact path="/centros">
            <Centros />
          </Route>
          <Route exact path="/jugadores">
            <Jugadores />
          </Route>
          <Route exact path="/cursos">
            <Cursos />
          </Route>
          <Route exact path="/nosotros">
            <Nosotros />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
