function Perfil() {
  const nomeAluno = "Erick";
  const curso = "TI";
  const matriculaAtiva = true;

  const disciplinas = [
    "Algoritmos",
    "Banco de Dados",
    "Redes",
    "Desenvolvimento Web",
  ];

  return (
    <div>
      <h2>Perfil do Aluno</h2>

      <p>Nome: {nomeAluno}</p>

      <p>Curso: {curso}</p>

      <p>
        {matriculaAtiva
          ? "Status: Matrícula Ativa"
          : "Status: Matrícula Trancada"}
      </p>

      <h3>Disciplinas em Curso:</h3>

      <ul>
        {disciplinas.map((disciplina, index) => (
          <li key={index}>{disciplina}</li>
        ))}
      </ul>
    </div>
  );
}

export default Perfil;
