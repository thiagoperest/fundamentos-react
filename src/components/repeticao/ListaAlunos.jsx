import React from "react";
import alunos from "../../data/alunos";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const todosAlunos = alunos.map((aluno) => {
    return (
      <li key={aluno.id}>
        {aluno.id}) {aluno.nome} {"->"} {aluno.nota}
      </li>
    );
  });

  return (
    <div>
      <ul style={{ listStyle: "none" }}>{todosAlunos}</ul>
    </div>
  );
};
