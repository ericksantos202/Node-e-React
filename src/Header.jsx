import { useSelector } from "react-redux";

function Header() {
  const quantidade = useSelector((state) => state.cart.items.length);

  return (
    <header className="header">
      {" "}
      <div className="logo">
        {" "}
        <h1>⚡ Cofre Nerd</h1> <p>Seu cofre de colecionáveis Pokémon!</p>{" "}
      </div>
      <div className="carrinho-header">
        🛒 <span>{quantidade}</span> item(s)
      </div>
    </header>
  );
}

export default Header;
