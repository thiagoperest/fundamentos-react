import "./App.css";
import React from "react";

import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsarioInfo from "./components/condicional/UsarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";

export default () => {
  return (
    <div className="App">
      <h1>Fundamentos React!</h1>

      <div className="Cards">
        <Card titulo="#12 - Contador" color="#BF00FF">
          <Contador numeroInicial={10} />
        </Card>

        <Card titulo="#11 - Componente Controlado (Input)" color="#FF0051">
          <Input />
        </Card>

        <Card titulo="#10 - Comunicação Indireta" color="#7AE858">
          <IndiretaPai />
        </Card>

        <Card titulo="#09 - Comunicação Direta" color="#0ED0F2">
          <DiretaPai />
        </Card>

        <Card titulo="#07 - Renderização Condicional" color="#FAA200">
          <ParOuImpar numero={21} />
          <UsarioInfo usuario={{ nome: "Fernando" }} />
          <UsarioInfo usuario={{ email: "fer@nando.com" }} />
        </Card>

        <Card titulo="#06 - Lista de Repetição - Produtos" color="#FA00A2">
          <TabelaProdutos />
        </Card>

        <Card titulo="#05 - Lista de Repetição - Alunos" color="#7D00FA">
          <ListaAlunos />
        </Card>

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
