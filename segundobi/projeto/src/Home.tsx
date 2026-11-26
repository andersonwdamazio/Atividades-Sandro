import { useEffect, useState } from "react";
import "./styles/utility.css";
import "./styles/header.css";
import Logo from "./assets/icons/lofiLogo.svg";
import Close from "./assets/icons/close.svg";
import Bom from "./assets/icons/musicFocus.svg";
import Ruim from "./assets/icons/musicChill.svg";
import Documento from "./assets/icons/musicNight.svg";
import Star from "./assets/icons/star.svg";
import StarOut from "./assets/icons/star_out.svg";
import Menu from "./assets/icons/menu.svg";
import Button from "./components/Button";
import Card from "./components/Card";
import Carrossel from "./components/Carrosel";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroRectangleOne from "./assets/images/rectangleOne-lofi.png";
import HeroRectangleTwo from "./assets/images/rectangleTwo-lofi.png";
import BartOne from "./assets/images/bart1.jpg";
import BartTwo from "./assets/images/bart2.jpg";
import BartThree from "./assets/images/bart3.jpg";
import "./styles/hero.css";
import "./styles/solution.css";
import "./styles/testimonials.css";
import "./styles/pricing.css";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    html.style.overflow = showMobileMenu ? "hidden" : "";
    return () => {
      html.style.overflow = "";
    };
  }, [showMobileMenu]);

  return (
    <>
      <header className="container py-sm">
        <nav className="flex items-center justify-between" aria-label="Navegação principal">
          <a href="#hero" aria-label="Lo-fi Flow, início">
            <img src={Logo} alt="Lo-fi Flow" width={220} height={80} />
          </a>

          <div className="desktop-only">
            <ul className="flex gap-1">
              <li><a href="#hero">Home</a></li>
              <li><a href="#solution">Playlists</a></li>
              <li><a href="#testimonials">Depoimentos</a></li>
              <li><a href="#pricing">Preços</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>

          <div className="desktop-only">
            <div className="flex items-center">
              <a className="reverse-color ml-lg" href="#contact">Contato</a>
              <Button text="Começar a ouvir" />
            </div>
          </div>

          <div className="mobile-menu">
            {showMobileMenu ? (
              <div className="mobile-menu-content">
                <div className="container flex">
                  <ul>
                    <li><a onClick={() => setShowMobileMenu(false)} href="#hero">Home</a></li>
                    <li><a onClick={() => setShowMobileMenu(false)} href="#solution">Playlists</a></li>
                    <li><a onClick={() => setShowMobileMenu(false)} href="#testimonials">Depoimentos</a></li>
                    <li><a onClick={() => setShowMobileMenu(false)} href="#pricing">Preços</a></li>
                    <li><a onClick={() => setShowMobileMenu(false)} href="#contact">Contato</a></li>
                  </ul>
                  <button
                    type="button"
                    onClick={() => setShowMobileMenu(false)}
                    className="btn-wrapper menu-toggle"
                    aria-label="Fechar menu"
                  >
                    <img src={Close} alt="" width={24} height={24} />
                  </button>
                </div>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setShowMobileMenu(true)}
                className="btn-wrapper menu-toggle"
                aria-label="Abrir menu"
                aria-expanded={false}
              >
                <img src={Menu} alt="" width={24} height={24} />
              </button>
            )}
          </div>
        </nav>
      </header>

      <section id="hero">
        <span className="desktop-only">
          <img src={HeroRectangleTwo} alt="" />
        </span>
        <img src={HeroRectangleOne} alt="" />
        <div className="container content">
          <p className="desktop-only">respira, dá o play</p>
          <h1>Seu espaço para desacelerar, focar e deixar a música fluir.</h1>
          <p>
            Playlists lo-fi para acompanhar seus estudos, suas pausas e aquelas noites tranquilas.
            Encontre o som certo para cada momento.
          </p>
          <div className="flex gap-1">
            <span><Button text="Começar a ouvir" /></span>
            <span className="desktop-only"><Button text="Explorar playlists" secondary /></span>
          </div>
        </div>
      </section>

      <section className="container" id="solution">
        <header>
          <span>
            <h2>Playlists</h2>
            <span className="desktop-only"><h2>Um clima pra cada momento</h2></span>
          </span>
          <p>
            Escolha uma playlist e encontre o seu <strong>ritmo ideal</strong> para focar,
            relaxar ou só curtir o momento.
          </p>
        </header>
        <section className="even-columns">
          <Card src={Bom} h3="Foco tranquilo" p1="Batidas suaves e sons ambientes para manter a concentração sem " p2="pressa" p3=". Ideal para estudar ou trabalhar." />
          <Card src={Ruim} h3="Pausa leve" p1="Um som macio para desacelerar, respirar fundo e deixar o dia ficar mais " p2="leve" p3="." />
          <Card src={Documento} h3="Noite chuvosa" p1="Piano calmo, chuva na janela e uma atmosfera perfeita para curtir o seu próprio " p2="cantinho" p3="." />
        </section>
      </section>

      <section id="testimonials">
        <header>
          <span>
            <p className="desktop-only">Um pouco de calma no dia</p>
            <h2>Encontre seu ritmo</h2>
          </span>
          <p className="p-header-testimonials">
            Histórias de quem deu o play, encontrou uma trilha sonora para a rotina e fez da pausa
            um momento especial.
          </p>
        </header>
        <section className="carousel" aria-label="Depoimentos de ouvintes">
          <div className="carousel-content">
            <Carrossel src={BartOne} star1={Star} star2={Star} star3={Star} star4={Star} star5={Star} p1="Coloco a playlist lo-fi para estudar e finalmente consigo entrar no meu ritmo. Virou parte da minha rotina." p2="Lia" p3="Estudante" />
            <Carrossel src={BartTwo} star1={Star} star2={Star} star3={Star} star4={Star} star5={StarOut} p1="A seleção de piano e chuva deixa minhas noites mais tranquilas. É como ter um cantinho só meu para respirar." p2="Caio" p3="Designer" />
            <Carrossel src={BartThree} star1={Star} star2={Star} star3={Star} star4={Star} star5={Star} p1="Encontrei a trilha perfeita para ler e desacelerar depois de um dia cheio. Dou play e o mundo fica mais calmo." p2="Nina" p3="Leitora" />
          </div>
          <div className="carousel-content" aria-hidden="true">
            <Carrossel src={BartOne} star1={Star} star2={Star} star3={Star} star4={Star} star5={Star} p1="Coloco a playlist lo-fi para estudar e finalmente consigo entrar no meu ritmo. Virou parte da minha rotina." p2="Lia" p3="Estudante" />
            <Carrossel src={BartTwo} star1={Star} star2={Star} star3={Star} star4={Star} star5={StarOut} p1="A seleção de piano e chuva deixa minhas noites mais tranquilas. É como ter um cantinho só meu para respirar." p2="Caio" p3="Designer" />
            <Carrossel src={BartThree} star1={Star} star2={Star} star3={Star} star4={Star} star5={Star} p1="Encontrei a trilha perfeita para ler e desacelerar depois de um dia cheio. Dou play e o mundo fica mais calmo." p2="Nina" p3="Leitora" />
          </div>
        </section>
      </section>

      <section id="pricing" className="pricing-section">
        <header className="pricing-heading">
          <p>Planos e preços</p>
          <h2>Nossos planos</h2>
        </header>
        <div className="pricing-grid">
          <article className="pricing-card">
            <h3>Básico</h3>
            <p className="plan-description">Entre no clima lo-fi e comece a ouvir sem pagar nada.</p>
            <p className="plan-price">Grátis</p>
            <a className="plan-button plan-button-outline" href="#solution">Ouvir grátis</a>
            <ul className="plan-features">
              <li>Com anúncios</li>
              <li>Até 10 faixas por dia</li>
              <li>Playlists lo-fi selecionadas</li>
            </ul>
          </article>
          <article className="pricing-card pricing-card-featured">
            <span className="plan-badge">1º mês grátis</span>
            <h3>Premium</h3>
            <p className="plan-description">Para ouvir suas playlists favoritas sem interrupções.</p>
            <p className="plan-price">R$ 19,90<span>/mês</span></p>
            <a className="plan-button plan-button-solid" href="#solution">Experimentar grátis</a>
            <ul className="plan-features">
              <li>Sem interrupção de anúncios</li>
              <li>Ouça quantas vezes quiser</li>
              <li>Acesso a todas as playlists</li>
            </ul>
          </article>
          <article className="pricing-card">
            <h3>Empresarial</h3>
            <p className="plan-description">Leve uma trilha lo-fi para o seu espaço de trabalho.</p>
            <p className="plan-price">R$ 12,90<span>/mês por dispositivo</span></p>
            <a className="plan-button plan-button-outline" href="#solution">Conhecer o plano</a>
            <ul className="plan-features">
              <li>Playlists para ambientes</li>
              <li>Até 10 dispositivos</li>
              <li>Reprodução sem limite</li>
            </ul>
          </article>
        </div>
      </section>

      <Contact />
      <Footer />
    </>
  );
}
