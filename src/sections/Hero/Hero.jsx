import './Hero.css';
import heroImage from '../../assets/heroImg.png'; 

export default function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="container hero-content">
        
        <div className="hero-text">
          <h1>
            Expanda sua visão<br />
            e dê os primeiros<br />
            passos para<br />
            <span className="text-highlight">construir seu futuro<br />na tecnologia.</span>
          </h1>
          <p>
            Aprenda na prática, desenvolva habilidades valorizadas pelo mercado e explore diferentes caminhos dentro do universo da tecnologia.
          </p>
          <a href="#formulario" className="btn-hero">
            Inscreva-se na imersão 2026
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="hero-image">
          {/* A imagem unificada (com fundo transparente) entra aqui */}
          <img src={heroImage} alt="Jovens sorrindo com elementos gráficos de tecnologia" />
        </div>

      </div>
    </section>
  );
}