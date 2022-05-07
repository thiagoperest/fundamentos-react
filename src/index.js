import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";

ReactDOM.render(
  <div>
    <Primeiro />
    <ComParametro
      titulo="Segundo Componente"
      subtitulo="Subtitulo Segundo Componente"
    />
  </div>,
  document.getElementById("root")
);
