function CardProduto({ nome, descricao, preco, disponivel }) {
 return (
 <div style={{
 border: '1px solid #ccc',
 borderRadius: '8px',
 padding: '20px',
 margin: '20px auto',
 maxWidth: '300px',
 boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
 }}>
 {/* Usamos as variáveis diretamente, sem o 'props.' */}
 <h2>{nome}</h2>
 <p>{descricao}</p>
 <p>Preço: R$ {preco.toFixed(2)}</p>
 {disponivel ? (
 <p style={{ color: 'green', fontWeight: 'bold' }}>Disponível!</p>
 ) : (
 <p style={{ color: 'red', fontWeight: 'bold' }}>Esgotado!</p>
 )}
 <button style={{
 backgroundColor: '#007bff',
 color: 'white',
 border: 'none',
 padding: '10px 15px',
 borderRadius: '5px',
 cursor: 'pointer'
 }}>Comprar</button>
 </div>
 );
}
export default CardProduto;