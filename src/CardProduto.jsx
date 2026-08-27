import { useDispatch } from "react-redux";
import { addItem } from "./features/cart/cartSlice";

function CardProduto({ produto }) {
  const dispatch = useDispatch();

  const id = produto.url.split("/").filter(Boolean).pop();

  const imagem = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  function comprarProduto() {
    const produtoCarrinho = {
      id: produto.name,
      nome: produto.name,
      imagem: imagem,
      preco: 10,
    };

    dispatch(addItem(produtoCarrinho));
  }

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "20px",
        margin: "20px",
        width: "250px",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={imagem}
        alt={produto.name}
        style={{
          width: "200px",
          height: "200px",
          objectFit: "contain",
        }}
      />

      <h2>{produto.name}</h2>

      <p>Preço: R$ 10,00</p>

      <button
        onClick={comprarProduto}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          padding: "10px 15px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Comprar
      </button>
    </div>
  );
}

export default CardProduto;
