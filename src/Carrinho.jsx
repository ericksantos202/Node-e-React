import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./features/cart/cartSlice";

function Carrinho() {
  const items = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const total = items.reduce((soma, item) => soma + item.preco, 0);

  return (
    <div
      className="carrinho"
      style={{
        margin: "20px",
        padding: "20px",
        border: "1px solid #c2c2c2",
        borderRadius: "8px",
      }}
    >
      {" "}
      <h2>🛒 Meu Carrinho</h2>
      <p>Quantidade de itens: {items.length}</p>
      {items.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          {items.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                marginBottom: "10px",
              }}
            >
              <img
                src={item.imagem}
                alt={item.nome}
                style={{ width: "50px" }}
              />

              <p>
                {item.nome} — R$ {item.preco.toFixed(2)}
              </p>
            </div>
          ))}

          <h3>Total: R$ {total.toFixed(2)}</h3>

          <button onClick={() => dispatch(clearCart())}>Limpar Carrinho</button>
        </>
      )}
    </div>
  );
}

export default Carrinho;
