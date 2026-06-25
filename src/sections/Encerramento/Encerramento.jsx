import './Encerramento.css';
import heroIMG from '../../assets/heroIMG.png';

export default function Encerramento() {
  return (
    <section className="encerramento-wrapper">
      <div className="container">
        <div className="encerramento-content">
          
          {/* Bloco de Texto Superior */}
          <div className="encerramento-text-block">
            <h2>
              A Imersão é a porta de entrada para você viver as experiências do <span className="text-purple">Prototipando a Quebrada</span>.
            </h2>
            
            <ul className="encerramento-benefits">
              <li>
                <img src={heroIMG} alt="Check" className="icon-check-purple" />
                <span>Aprenda na prática com projetos reais</span>
              </li>
              <li>
                <img src={heroIMG} alt="Check" className="icon-check-purple" />
                <span>Conheça profissionais e empresas de tecnologia</span>
              </li>
              <li>
                <img src={heroIMG} alt="Check" className="icon-check-purple" />
                <span>Desenvolva habilidades para o mercado e para a vida</span>
              </li>
              <li>
                <img src={heroIMG} alt="Check" className="icon-check-purple" />
                <span>Faça parte de uma comunidade que te apoia</span>
              </li>
            </ul>
          </div>

          {/* Banner Inferior */}
          <div className="encerramento-banner">
            <div className="banner-info">
              <img src={heroIMG} alt="Ícone Comunidade" className="icon-people" />
              <div className="banner-text">
                <h3>As vagas são gratuitas e limitadas.</h3>
                <p>Faça sua inscrição e venha viver a experiência do Prototipando a Quebrada.</p>
              </div>
            </div>
            
            <div className="banner-graphic">
              {/* Substitua por uma imagem daquele texto manuscrito verde depois */}
              <img src={heroIMG} alt="Vem fazer parte e transformar o seu futuro!" className="icon-handwritten" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}