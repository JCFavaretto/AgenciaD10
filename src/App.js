import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "components/Header";
import Footer from "components/Footer";
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
          <Route exact path="/JyG" component={JugadasyGoles} />
          <Route exact path="/centros" component={Centros} />
          <Route exact path="/jugadores" component={Jugadores} />
          <Route exact path="/nosotros" component={Nosotros} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
