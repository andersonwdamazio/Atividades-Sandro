function Header() {
  return (
    <header id="inicio">
      <h1>Blog LoFi</h1>
      <p>
        Lofi é aquele tipo de música tranquila, com batidas suaves e um clima meio nostálgico —
        perfeita pra estudar, trabalhar ou só relaxar. Aqui no blog, reunimos dicas, curiosidades
        e playlists pra você aproveitar cada momento com a trilha sonora certa.
      </p>
    </header>
  );
}

function Navigation() {
  return (
    <nav>
      <a href="#inicio">Início</a>
      <a href="#artigo">Artigo</a>
      <a href="#posts">Mais posts</a>
    </nav>
  );
}

function Article(props) {
  return (
    <article id="artigo">
      <h2>{props.titulo}</h2>
      <p>{props.conteudo}</p>
      <a href="#posts">Ler mais →</a>
    </article>
  );
}

function Sidebar(props) {
  return (
    <aside id="posts">
      <h2>Posts relacionados</h2>
      {props.posts.map((post) => (
        <div className="post" key={post.titulo}>
          <h3>{post.titulo}</h3>
          <p>{post.conteudo}</p>
          <a href="#artigo">Ler mais →</a>
        </div>
      ))}
    </aside>
  );
}

function Footer() {
  return (
    <footer>
      <p>💬 Em breve, chat aberto</p>
      <p>© 2026 Blog LoFi - Todos os direitos reservados.</p>
    </footer>
  );
}

function App() {
  const post = {
    titulo: '5 playlists lofi para focar nos estudos',
    conteudo: 'Reunimos as melhores batidas relaxantes pra você manter o foco nas madrugadas de estudo, sem perder aquele clima aconchegante.'
  };

  const postsRelacionados = [
    {
      titulo: 'A origem do lofi hip hop',
      conteudo: 'Você sabia que o gênero nasceu da mistura entre jazz, hip hop e samples de vinil? Entenda como essa sonoridade conquistou o mundo.'
    },
    {
      titulo: 'Como montar seu próprio setup lofi de estudos',
      conteudo: 'Luz quente, fones confortáveis e uma boa playlist: veja dicas simples para criar o ambiente perfeito para relaxar e produzir.'
    }
  ];

  return (
    <div className="container">
      <Header />
      <Navigation />
      <main>
        <Article titulo={post.titulo} conteudo={post.conteudo} />
        <Sidebar posts={postsRelacionados} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
