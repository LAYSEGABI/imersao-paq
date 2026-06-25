import './Sobre.css';
import imagemSobre from '../../assets/heroImg.png'; 

export default function Sobre() {
  return (
    <section id="sobre" className="sobre-wrapper">
      <div className="container">
        
        {/* Card Principal */}
        <div className="sobre-card">
          <div className="sobre-image">
            <img src={imagemSobre} alt="Galeria de fotos da comunidade PAQ" />
          </div>

          <div className="sobre-text">
            <h2>
              O QUE É O <span className="text-highlight">PAQ?</span>
            </h2>
            
            <p>
              O Prototipando a Quebrada é uma comunidade de aprendizagem <span className="text-highlight">gratuita</span> que conecta jovens de periferia e escola pública ao universo da tecnologia.
            </p>
            
            <p>
              Além de você <span className="text-highlight">aprender na prática</span>, desenvolver <span className="text-highlight">habilidades para o mercado e para a vida</span>, você <span className="text-highlight">amplia suas oportunidades de futuro</span> e faz parte de uma <span className="text-highlight">comunidade que te apoia e quer te ver crescer</span>.
            </p>
          </div>
        </div>

        {/* Nova área de Call to Action (CTA) */}
        <div className="sobre-cta-container">
          <a href="#formulario" className="btn-sobre-cta">
            Vem fazer parte do PAQ e transformar o seu futuro
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <p className="sobre-prazo">Inscrições abertas até dia 29/07</p>
        </div>

      </div>
    </section>
  );
}