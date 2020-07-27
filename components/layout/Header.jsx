import React from "react";
import styled from "@emotion/styled";
import Buscar from "../ui/Buscar";

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <p>P</p>

          <Buscar />

          {/* Nav Aqui */}
        </div>

        <div>{/* Menu de administracion */}</div>
      </div>
    </header>
  );
};

export default Header;
