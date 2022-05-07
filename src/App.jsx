import React from "react";

import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>
      <h1>Fundamentos React!</h1>
      <Primeiro />
      <ComParametro
        titulo="Situação do Aluno"
        aluno="Thiago Peres"
        nota={9.3}
      />
      <hr/>
      <Aleatorio min={1} max={60}/>
    </>
  );
};
