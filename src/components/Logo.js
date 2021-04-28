import React from "react";

import logoSm from "assets/logo-sm.png";

function Logo() {
  return (
    <div className="logo">
      <img src={logoSm} alt="D10" height="40px" />
      <div className="logo-txt">
        <span style={{ fontSize: "0.6rem" }}>dediez</span>
        <span>Integración Deportiva</span>
      </div>
    </div>
  );
}

export default Logo;
