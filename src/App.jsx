import "./App.css";
import React from "react";

import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="App">
      <h1>Fundamentos React!</h1>

      <div className="Cards">
        <Card titulo="#03 - Desafio Aleatório">
          <Aleatorio min={1} max={60} />
        </Card>

        <Card titulo="#02 - Componente com Parâmetro">
          <ComParametro
            titulo="Situação do Aluno"
            aluno="Thiago Peres"
            nota={9.3}
          />
        </Card>
        <Card titulo="#01 - Primeiro Componente">
          <Primeiro />
        </Card>
      </div>
    </div>
  );
};
