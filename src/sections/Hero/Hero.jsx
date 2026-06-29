import "./Hero.css";
import heroImage from "../../assets/hero.png";
import { CheckCircle2, UserCircle2, MapPin, Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-wrapper">

      <div className="container hero-content">
        <div className="hero-text">
          {/* Transformado em Badge */}
          <span className="hero-badge"><Rocket size={15}/> Expanda sua visão</span>

          {/* Título com peso maior */}
          <h1 className="hero-title">
            Dê os primeiros <br/> passos para
            <br />
            <span className="text-highlight">
              construir seu futuro
              <br />
              na tecnologia.
            </span>
          </h1>

          <p>
            Aprenda na prática, desenvolva habilidades valorizadas pelo mercado
            e explore diferentes caminhos dentro do universo da tecnologia.
          </p>

          {/* Lista de Features com Ícones */}
          <div className="hero-features">
            <div className="feature-item">
              <CheckCircle2 size={22} className="feature-icon" />
              <span>100% gratuita</span>
            </div>
            <div className="feature-item">
              <UserCircle2 size={22} className="feature-icon" />
              <span>Jovens de 15 a 24 anos</span>
            </div>
            <div className="feature-item">
              <MapPin size={22} className="feature-icon" />
              <span>Florianópolis e Palhoça</span>
            </div>
          </div>

          <a href="#formulario" className="btn-hero">
            Inscreva-se na imersão 2026

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className="hero-image">
          <img
            src={heroImage}
            alt="Jovens sorrindo com elementos gráficos de tecnologia"
          />
        </div>
      </div>
    </section>
  );
}