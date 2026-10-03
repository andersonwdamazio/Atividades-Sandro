import { useState } from 'react'
import ProductCard from './ProductCard';

export default function App() { 
 const [contador, setContador] = useState(0)
  const listaProdutos = [ 
    
    {id: 1, nome: "Teclado Razer", valor: 300.00 },
    {id: 2, nome: "Mouse Razer", valor: 210.00 },
    {id: 3, nome: "Monitor Samsung", valor: 3300.00 },
    {id: 4, nome: "Fone de Ouvido JBL", valor: 1950.00 },
    {id: 5, nome: "Cadeira Gamer", valor: 2000.00 },
    ]
  function incrementar() {
    //processamento e regras
    setContador(contador + 1);
    
    console.log(contador)
 }
  
  return (
    <section className="container">
    <div>
      <h1>Contador</h1>
      <h3>{contador}</h3>
      <button onClick={incrementar}>
        Incrementar
      </button>
    </div>
    <hr/>
    <h4>Lista de Produtos</h4>
    {listaProdutos.map((produto) => <ProductCard key={produto.id} produto={produto} />)}

    {listaProdutos.map((produto) => (
      <div key={produto.id}>
        <p>
        {produto.nome}</p>
        <p>R$ {produto.valor}</p>
    
      </div> 
    ))}
      </section>  
    ); 
}