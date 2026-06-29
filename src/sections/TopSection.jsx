import Header from "./Header/Header"; // Ajuste o caminho conforme seu projeto
import Hero from "./Hero/Hero"; // Ajuste o caminho conforme seu projeto
import ParticlesBackground from "../components/ParticlesBackground/ParticlesBackground";
import "./TopSection.css"; // Vamos criar esse CSS no próximo passo

export default function TopSection() {
  return (
    <div className="top-section-wrapper">
      {/* O fundo de partículas agora fica no elemento pai */}
      <ParticlesBackground />
      
      {/* O conteúdo fica por cima */}
      <div className="top-section-content">
        <Header />
        <Hero />
      </div>
    </div>
  );
}