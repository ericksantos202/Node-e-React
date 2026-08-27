import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CardProduto from "./CardProduto";
import Carrinho from "./Carrinho";
import Header from "./Header";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function buscarProdutos() {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=10",
        );

        setProdutos(response.data.results);
      } catch (erro) {
        console.error(erro);
        setError("Não foi possível carregar as cartas.");
      } finally {
        setLoading(false);
      }
    }

    buscarProdutos();
  }, []);

  if (loading) {
    return <p>Carregando cartas...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error} </p>;
  }

  return (
    <>
      <Header />

      <Carrinho />

      <main>
        <h2>Colecionáveis com Promoção Evolution:</h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {produtos.map((produto) => (
            <CardProduto key={produto.id} produto={produto} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
