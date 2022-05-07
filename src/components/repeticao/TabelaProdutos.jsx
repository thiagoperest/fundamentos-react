import React from "react";
import produtos from "../../data/produtos";
import "./TabelaProdutos.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  function getProdutos() {
    return produtos.map((produto, i) => {
      return (
        <tr key={produto.id} className={i % 2 === 0 ? "Par" : ""}>
          <td>{produto.id}</td>
          <td>{produto.nome}</td>
          <td>R$ {produto.preco.toFixed(2).replace(".", ",")}</td>
        </tr>
      );
    });
  }

  return (
    <div className="TabelaProdutos">
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{getProdutos()}</tbody>
      </table>
    </div>
  );
};
