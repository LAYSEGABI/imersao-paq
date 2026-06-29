import './Header.css';
import LogoPaq from "../../assets/logoPAQ.svg"

export default function Header() {
  return (
    <header className="header-wrapper">
      <div className="container header-content">
        <div className="header-logo">
          <a href="#"><img src={LogoPaq} alt="Logo Prototipando a Quebrada" /></a>
        </div>

        <nav className="header-nav">
          <a href="#sobre">Sobre o PAQ</a>
          <a href="#vivencias">Vivências</a>
          <a href="#jornada">Jornada</a>
          <a href="#funciona">Como funciona</a>

        </nav>

        <div className="header-cta">
          <a href="#formulario" className="btn-inscreva-se">
            Inscreva-se
          </a>
        </div>
      </div>
    </header>
  );
}