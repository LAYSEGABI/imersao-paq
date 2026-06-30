import "./Imersao.css";
import heroIMG from "../../assets/heroImg.png";
import Inaitec from "../../assets/inaitec.jpg";
import acate from "../../assets/401.png";
import Samuel from "../../assets/samuel.png";
import { SquareCheckBig } from "lucide-react";

export default function Imersao() {
  return (
    <section id="funciona" className="imersao-wrapper">
      <div className="container">
        {/* Bloco Superior: Introdução e Informações */}
        <div className="imersao-top-grid">
          {/* Card Esquerdo: A Imersão */}
          <div className="imersao-intro-card">
            <h2>
              A Imersão:
              <br />
              <span className="text-highlight">seu primeiro passo</span>
            </h2>
            <p>
              A Imersão é a porta de entrada para você viver as experiências do
              Prototipando a Quebrada.
            </p>
            <div className="imersao-intro-image">
              <img src={Samuel} alt="Alunos da imersão comemorando" />
            </div>
          </div>

          {/* Card Direito: Como vai funcionar */}
          <div className="imersao-info-card">
            <h3 className="info-main-title">Como vai funcionar?</h3>

            <div className="imersao-info-content">
              {/* Coluna Esquerda: Requisitos */}
              <div className="imersao-requisitos">
                <h4 className="info-subtitle">Quem pode participar?</h4>
                <ul className="requisitos-lista">
                  <li>
                    <SquareCheckBig size={28} />
                    Tem entre 15 e 24 anos;
                  </li>
                  <li>
                    <SquareCheckBig size={28} />
                    Estudantes ou formados em escolas públicas;
                  </li>
                  <li>
                    <SquareCheckBig size={28} />
                    Tem interesse em aprender mais sobre o universo da
                    tecnologia.
                  </li>
                </ul>
              </div>

              {/* Coluna Direita: Locais */}
              <div className="imersao-locais">
                <h4 className="info-subtitle">
                  Onde e quando vão rolar os encontros?
                </h4>
                <div className="locais-grid">
                  <div className="local-card">
                    <div className="local-text">
                      <h5>
                        Turma Floripa
                        <br />
                        Centro
                      </h5>
                      <p>
                        Rua Trajano, 199
                        <br />
                        Florianópolis - SC
                      </p>
                    </div>
                    <img
                      src={Inaitec}
                      alt="Prédio da Turma Floripa"
                      className="local-img"
                    />
                  </div>

                  <div className="local-card">
                    <div className="local-text">
                      <h5>
                        Turma Palhoça
                        <br />
                        Pedra Branca
                      </h5>
                      <p>
                        Avenida das Águias, 231
                        <br />
                        Palhoça - SC
                      </p>
                    </div>
                    <img
                      src={acate}
                      alt="Prédio da Turma Palhoça"
                      className="local-img"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Rodapé do Card Direito: Horários */}
            <div className="imersao-horarios">
              <div className="horario-item">
                <img
                  src={heroIMG}
                  alt="Ícone Calendário"
                  className="icon-schedule"
                />
                <span>Segundas, quartas e sextas</span>
              </div>
              <div className="horario-item">
                <img
                  src={heroIMG}
                  alt="Ícone Tarde"
                  className="icon-schedule"
                />
                <span>Turmas a tarde 15h - 17h</span>
              </div>
              <div className="horario-item">
                <img
                  src={heroIMG}
                  alt="Ícone Noite"
                  className="icon-schedule"
                />
                <span>Turmas a noite 18h - 20h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bloco Inferior: Banner CTA */}
        <div className="imersao-cta-banner">
          <div className="cta-banner-text">
            <h2>
              Seu futuro <span className="text-highlight">não</span> começa
              quando você estiver pronto.
              <br />
              Ele começa quando você decide{" "}
              <span className="text-highlight">dar o primeiro passo.</span>
            </h2>
            <p>
              As vagas são{" "}
              <span className="text-highlight">gratuitas e limitadas</span>.
              <br />
              Faça sua inscrição e venha viver a experiência do Prototipando a
              Quebrada.
            </p>
          </div>

          <div className="cta-banner-action">
            <a href="#inscricao" className="cta-button">
              Garantir Minha Vaga
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
