// Um componente é uma função que retorna JSX
function BoasVindas() {
  const nomeAluno = "Fulano";
  const anoAtual = new Date().getFullYear();

  return (
    <div>
      <h2>Bem-vindo, {nomeAluno}!</h2>

      {/* Injetando a variável nomeAluno */}
      <p>Estamos em {anoAtual} e prontos para codificar!</p>

      {/* Injetando a expressão anoAtual */}
      <p>A soma de 5 + 3 é: {5 + 3}</p>

      {/* Injetando uma expressão matemática */}
    </div>
  );
}

// Exporta o componente para ser utilizado em outros arquivos
export default BoasVindas;
