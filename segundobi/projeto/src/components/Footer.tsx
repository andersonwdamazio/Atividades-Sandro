import Logo from "../assets/icons/lofiLogo.svg";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#hero" aria-label="Lo-fi Flow, voltar ao início">
              <img src={Logo} alt="Lo-fi Flow" width={170} height={62} />
            </a>
            <p>Uma trilha sonora tranquila para acompanhar seus momentos.</p>
          </div>

          <nav className="footer-column" aria-label="Navegação">
            <h2>Explore</h2>
            <a href="#solution">Playlists</a>
            <a href="#testimonials">Depoimentos</a>
            <a href="#pricing">Planos</a>
          </nav>

          <nav className="footer-column" aria-label="Ajuda e contato">
            <h2>Fale com a gente</h2>
            <a href="#contact">Contato</a>
            <a href="#contact">Enviar uma mensagem</a>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Lo-fi Flow. Todos os direitos reservados.</p>
          <a href="#hero">Voltar ao topo ↑</a>
        </div>
      </div>
    </footer>
  );
}
