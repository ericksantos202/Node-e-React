// Um componente é uma função que retorna JSX
function Header() {
 return (
 <header style={{
 backgroundColor: '#282c34',
 padding: '20px',
 color: 'white',
 textAlign: 'center',
 fontSize: 'calc(10px + 2vmin)'
 }}>
 <h1>Meu Incrível App React!</h1>
 <p>Bem-vindo à Aula 2: Componentes e Props</p>
 </header>
 );
}
// Precisamos exportar o componente para poder usá-lo em outros lugares
export default Header;