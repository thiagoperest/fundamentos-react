import "./App.css";
import React from "react";

import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="App">
      <h1>Fundamentos React!</h1>

      <div className="Cards">
        <Card titulo="#04 - Componente com Filhos" color="#0075FA">
          <Familia sobrenome="Jhonson's">
            <FamiliaMembro nome="Pedro" />
            <FamiliaMembro nome="Ana" />
            <FamiliaMembro nome="Fernanda" />
          </Familia>
        </Card>

        <Card titulo="#03 - Desafio Aleatório" color="#FA6900">
          <Aleatorio min={1} max={60} />
        </Card>

        <Card titulo="#02 - Componente com Parâmetro" color="#E94C6F">
          <ComParametro
            titulo="Situação do Aluno"
            aluno="Thiago Peres"
            nota={9.3}
          />
        </Card>
        <Card titulo="#01 - Primeiro Componente" color="#E8B71A">
          <Primeiro />
        </Card>
      </div>
    </div>
  );
};
