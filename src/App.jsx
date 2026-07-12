import Header from './Header';
import CardProduto from './CardProduto';

function App() {
  // Array de objetos, onde cada objeto representa um produto
  const produtos = [
    {
      id: 1,
      nome: "Controle Gamer Pro",
      descricao: "O controle perfeito para suas gameplays épicas!",
      preco: 299.99,
      disponivel: true,
    },
    {
      id: 2,
      nome: "Teclado Mecânico RGB",
      descricao: "Para digitar e jogar com estilo e precisão.",
      preco: 450.00,
      disponivel: false,
    },
    {
      id: 3,
      nome: "Mouse Gamer Ultraleve",
      descricao: "Precisão e velocidade para dominar qualquer partida.",
      preco: 180.50,
      disponivel: true,
    },
    {
      id: 4,
      nome: "Headset Imersivo 7.1",
      descricao: "Ouça cada passo do inimigo e mergulhe no jogo.",
      preco: 350.00,
      disponivel: true,
    },
  ];

  return (
    <>
      <Header />

      <main>
        <h2>Nossos Produtos Incríveis:</h2>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {produtos.map((produto) => (
            <CardProduto
              key={produto.id}
              nome={produto.nome}
              descricao={produto.descricao}
              preco={produto.preco}
              disponivel={produto.disponivel}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;