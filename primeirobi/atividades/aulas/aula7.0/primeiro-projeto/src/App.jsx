import "./App.css";
import Header from "./components/Header";

export default function App() {
  const qtdPosts = 16;
  const possuiAssinatura = false;
 
  return (
    <main id ="container">
      <Header 
         habilitado = {possuiAssinatura} 
         quantidadePosts = {qtdPosts} />
       <section> 
      <article>
        <h1>Flamengo 2x1 Corinthians</h1>
        <p>NOS 45 DO SEGUNDO PERDEU</p>
      </article>

      <article>
        <h1>Flamengo 2x1 Corinthians</h1>
        <p>NOS 45 DO SEGUNDO PERDEU</p>
      </article>
      
      <article>
        <h1>Flamengo 2x1 Corinthians</h1>
        <p>NOS 45 DO SEGUNDO PERDEU</p>
      </article>
      
      <article>
        <h1>Flamengo 2x1 Corinthians</h1>
        <p>NOS 45 DO SEGUNDO PERDEU</p>
      </article>
      </section>
    </main>
  );
}