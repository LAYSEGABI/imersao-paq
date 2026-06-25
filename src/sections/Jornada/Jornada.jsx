import './Jornada.css';
import heroIMG from '../../assets/heroImg.png';

export default function Jornada() {
  return (
    <section id="jornada" className="jornada-wrapper">
      <div className="container">
        <div className="jornada-main-container">
          
          {/* Cabeçalho da Seção com as imagens "splash" laterais */}
          <div className="jornada-header">
            <div className="splash-img left">
              <img src={heroIMG} alt="Elemento decorativo esquerdo" />
            </div>
            
            <div className="jornada-header-text">
              <h2>
                SUA <span className="text-highlight">JORNADA</span> NO PAQ
              </h2>
              <p>Cada etapa <strong>prepara você para o próximo desafio.</strong></p>
            </div>

            <div className="splash-img right">
              <img src={heroIMG} alt="Elemento decorativo direito" />
            </div>
          </div>

          {/* Trilha / Timeline */}
          <div className="jornada-timeline">
            
            {/* Etapa 1 */}
            <div className="jornada-step">
              <div className="jornada-icon">
                <img src={heroIMG} alt="Ícone Imersão" />
              </div>
              <div className="jornada-step-title">
                <span className="step-number">1</span>
                <h3>Imersão</h3>
              </div>
              <span className="step-duration">(3 meses)</span>
              <p>
                Explore o universo da tecnologia e inovação: <span className="text-highlight">amplie sua visão</span> sobre carreira e futuro, aprenda <span className="text-highlight">ferramentas digitais</span> essenciais no mercado, conheça suas habilidades e <span className="text-highlight">trabalhe de forma colaborativa</span> para criar soluções inovadoras.
              </p>
            </div>

            <div className="jornada-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Etapa 2 */}
            <div className="jornada-step">
              <div className="jornada-icon">
                <img src={heroIMG} alt="Ícone Experimentação" />
              </div>
              <div className="jornada-step-title">
                <span className="step-number">2</span>
                <h3>Experimentação</h3>
              </div>
              <span className="step-duration">(6 meses)</span>
              <p>
                Escolha a trilha que mais desperta sua curiosidade: <span className="text-highlight">Programação, Design e Criação de jogos</span>. Dê seus primeiros passos, aprendendo a base e desenvolvendo seus primeiros projetos.
              </p>
            </div>

            <div className="jornada-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Etapa 3 */}
            <div className="jornada-step">
              <div className="jornada-icon">
                <img src={heroIMG} alt="Ícone Aceleração" />
              </div>
              <div className="jornada-step-title">
                <span className="step-number">3</span>
                <h3>Aceleração</h3>
              </div>
              <span className="step-duration">(1 semestre)</span>
              <p>
                Aprofunde o conhecimento: tenha <span className="text-highlight">mentorias com profissionais experientes</span> da área e valide tudo que aprendeu <span className="text-highlight">através da prática</span>.
              </p>
            </div>

            <div className="jornada-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Etapa 4 */}
            <div className="jornada-step">
              <div className="jornada-icon">
                <img src={heroIMG} alt="Ícone PAQ no Trampo" />
              </div>
              <div className="jornada-step-title">
                <span className="step-number">4</span>
                <h3>PAQ no Trampo</h3>
              </div>
              <span className="step-duration">(3 meses)</span>
              <p>
                Participam de <span className="text-highlight">processos seletivos com empresas de tecnologia</span> parceiras e abra caminhos para a inserção no mercado de trabalho.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}